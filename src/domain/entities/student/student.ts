import { Entity } from "../../core/Entity";
import { StudentProps } from "./types";

export class Student extends Entity<StudentProps> {
  private constructor(props: StudentProps, id?: string) {
    super(props, id);
  }

  static create(props: StudentProps, id?: string): Student {
    return new Student(props, id);
  }
}
