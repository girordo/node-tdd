import { StudentsRepository } from "../../src/application/repositories/StudentsRepository";
import { Student } from "../../src/domain/entities/student/student";

class InMemoryStudentsRepository implements StudentsRepository {
  public items: Student[] = [];

  findById(id: string): Promise<Student | undefined> {}
}
