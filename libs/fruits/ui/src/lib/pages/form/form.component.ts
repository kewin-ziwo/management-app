import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, FormState, TextInputComponent } from '@management-app/shared/ui';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  Fruit,
  LoadingService,
} from '@management-app/shared/data-access';
import { ActivatedRoute, Router } from '@angular/router';
import { FruitService } from '@management-app/fruits/api';

@Component({
  selector: 'lib-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TextInputComponent, ButtonComponent],
  templateUrl: './form.component.html',
})
export class FormComponent {
  FormBuilder = inject(FormBuilder);
  ActivatedRoute = inject(ActivatedRoute);
  LoadingService = inject(LoadingService);
  Router = inject(Router);
  FruitService = inject(FruitService);

  FormState = FormState;
  formState: FormState | null = null;

  form: FormGroup = this.buildForm();
  fruit: Fruit | null = null;

  ngOnInit() {
    const fruitId = this.ActivatedRoute.snapshot.params['id'] || null;
    this.formState = fruitId ? FormState.EDIT : FormState.ADD;
    if (this.formState === FormState.EDIT) this.loadFruit(fruitId);
  }

  loadFruit(fruitId: string) {
    const _this = this;
    _this.LoadingService.loadingOn();
    const getObs$ = _this.FruitService.getOne(fruitId);
    getObs$.subscribe({
      next(data) {
        _this.fruit = data;
        _this.form.setValue({
          name: data.name,
          scientificName: data.scientificName,
          color: data.color,
          pricePerKg: data.pricePerKg,
        });
      },
      complete() {
        _this.LoadingService.loadingOff();
      },
    });
  }

  buildForm() {
    return this.FormBuilder.group({
      name: new FormControl(
        { value: this.fruit?.name || '', disabled: false },
        [Validators.required]
      ),
      scientificName: new FormControl({ value: '', disabled: false }),
      color: new FormControl({ value: '', disabled: false }, [
        Validators.required,
      ]),
      pricePerKg: new FormControl({ value: '', disabled: false }, [
        Validators.required,
      ]),
    });
  }

  getControl(name: string) {
    return this.form.get(name) as FormControl;
  }

  onSubmitForm() {
    if (this.formState === FormState.ADD) this.saveNewFruit();
    if (this.formState === FormState.EDIT) this.editFruit();
  }

  saveNewFruit() {
    const _this = this;
    _this.LoadingService.loadingOn();
    const postObs$ = this.FruitService.post({
      id: Math.round(Math.random() * 10000000000),
      ...this.form.value,
    });
    postObs$.subscribe({
      next(data) {
        _this.form.reset();
      },
      complete() {
        _this.LoadingService.loadingOff();
      },
    });
  }

  editFruit() {
    if (!this.fruit) return;
    const _this = this;
    _this.LoadingService.loadingOn();
    const postObs$ = this.FruitService.put(
      this.fruit.id.toString(),
      this.form.value
    );
    postObs$.subscribe({
      next(data) {
        _this.Router.navigate(['/'])
      },
      complete() {
        _this.LoadingService.loadingOff();
      },
    });
  }
}
