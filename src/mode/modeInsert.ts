"use strict";

import { ModeName, Mode } from './mode';
import { VSCodeVimCursorType } from './mode';

export class InsertMode extends Mode {
  public text = "Insert Mode";
  public cursorType = VSCodeVimCursorType.Line;

   constructor() {
    super(ModeName.Insert);
  }
}
