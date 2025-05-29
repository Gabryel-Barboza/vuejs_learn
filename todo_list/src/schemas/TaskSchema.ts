export type TaskItem = {
  title: string;
  description: string;
  dateCompleted: string;
  isFinished: boolean;
};

export interface TaskId {
  id: number;
}

export interface TaskItemCreate {
  id: number;
  title: string;
  description: string;
  dateCompleted: string;
  isFinished: boolean;
}
