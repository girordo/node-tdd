import { Entity } from "../../core/Entity";
import { ChallengeProps } from "./types";

export class Challenge extends Entity<ChallengeProps> {
  private constructor(props: ChallengeProps, id?: string) {
    super(props, id);
  }

  static create(props: ChallengeProps, id?: string): Challenge {
    return new Challenge(props, id);
  }
}
