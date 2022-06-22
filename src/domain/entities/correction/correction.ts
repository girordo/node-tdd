import { Entity } from "../../core/Entity";
import { CorrectionProps } from "./types";

export class Correction extends Entity<CorrectionProps> {
  private constructor(props: CorrectionProps, id?: string) {
    super(props, id);
  }

  static create(props: CorrectionProps): Correction {
    return new Correction(props);
  }
}
