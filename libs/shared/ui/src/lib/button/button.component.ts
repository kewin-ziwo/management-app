import { Component, EventEmitter, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  handleClick = output<EventEmitter<any>>();
  disabled = input(false)

  onClick(e: any) {
    this.handleClick.emit(e);
  }
}
