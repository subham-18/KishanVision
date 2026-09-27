/**
 * KisanVision AI - Type Definitions
 */

export interface AnalysisCondition {
  name: string;
  likelihood: string;
  description: string;
}

export interface ImmediateAction {
  step: number;
  action: string;
  urgency: 'Today' | 'Next 24-48 Hours' | '+3 Days' | string;
}

export interface RegenerativePractice {
  title: string;
  practice: string;
  benefit: string;
}

export interface SevenDayStep {
  day: string;
  focus: string;
  action: string;
}

export interface ExpertEscalation {
  threshold: string;
  recommended_body: string;
  helpline: string;
  warning_signs: string[];
}

export interface CropAnalysisResult {
  visual_observations: string[];
  possible_conditions: AnalysisCondition[];
  primary_concern: string;
  risk_level: 'Low' | 'Moderate' | 'High' | string;
  confidence: string;
  confidence_score?: number;
  environmental_considerations: string[];
  immediate_actions: ImmediateAction[];
  regenerative_practices: RegenerativePractice[];
  seven_day_plan: SevenDayStep[];
  expert_escalation: ExpertEscalation;
  farmer_summary_native: string;
  farmer_summary_english: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface FarmContextState {
  crop: string;
  state: string;
  district: string;
  language: string;
  question: string;
  imagePreview: string | null;
  selectedScenarioId?: string;
}
