import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { TodoComponent } from "./components/todo/todo.component";
import { TodoItemComponent } from "./components/todo-item/todo-item.component";

@NgModule({
  declarations: [AppComponent, TodoComponent, TodoItemComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
