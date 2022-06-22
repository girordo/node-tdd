import { Entity } from "../../core/Entity";
import { SubmissionProps } from "./types";

export class Submission extends Entity<SubmissionProps> {
  private constructor(props: SubmissionProps, id?: string) {
    super(props, id);
  }

  static create(props: SubmissionProps, id?: string): Submission {
    return new Submission(props, id);
  }
}
