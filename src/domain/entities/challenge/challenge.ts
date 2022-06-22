import { Entity } from "../../core/Entity";
import { ChallengeProps } from "./types";

export class Challenge extends Entity<ChallengeProps> {
  private constructor(props: ChallengeProps, id?: string) {
    super(props, id);
  }

  public create(props: ChallengeProps): Challenge {
    return new Challenge(props);
  }
}
