
export type QuestionCategory = 'openness' | 'conscientiousness' | 'extraversion' | 'agreeableness' | 'neuroticism';

export interface Question {
  id: number;
  text: string;
  category: QuestionCategory;
  isReversed?: boolean;
}

export interface QuizResult {
  openness: number;
  conscientiousness: number;
  extraversion: number;
  agreeableness: number;
  neuroticism: number;
}

export interface CategoryDescription {
  title: string;
  description: string;
  high: string;
  low: string;
  color: string;
}

export interface AnswerData {
  [questionId: number]: number;
}
