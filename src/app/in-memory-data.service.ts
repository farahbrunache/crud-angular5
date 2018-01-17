import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos = [
      {
        id: 1,
        name: "todo - 1",
        isComplete: false
      },
      {
        id: 2,
        name: "todo - 2",
        isComplete: true
      },
      {
        id: 3,
        name: "todo - 3",
        isComplete: false
      }
    ];
    return { todos };
  }
}
