// types.ts
export interface ModelMetadata {
  name: string;
  description: string;
  version: string;
  author: string;
}

export interface TrainingData {
  inputs: number[][];
  outputs: number[][];
}

export interface ModelConfiguration {
  learningRate: number;
  batchSize: number;
  epochs: number;
}

export interface ModelEvaluationMetrics {
  accuracy: number;
  precision: number;
  recall: number;
  f1Score: number;
}

export interface PredictionResult {
  predictedValues: number[];
  confidenceScores: number[];
}

export interface Model {
  metadata: ModelMetadata;
  train(data: TrainingData, config: ModelConfiguration): void;
  evaluate(data: TrainingData): ModelEvaluationMetrics;
  predict(inputs: number[]): PredictionResult;
}