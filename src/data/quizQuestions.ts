
import { Question } from "../types/quiz";

export const questions: Question[] = [
  // Openness questions
  { id: 1, text: "I have a vivid imagination.", category: "openness" },
  { id: 2, text: "I am quick to understand new ideas.", category: "openness" },
  { id: 3, text: "I enjoy thinking about abstract concepts.", category: "openness" },
  { id: 4, text: "I have difficulty understanding abstract ideas.", category: "openness", isReversed: true },
  { id: 5, text: "I have a rich vocabulary.", category: "openness" },
  { id: 6, text: "I am not interested in abstract ideas.", category: "openness", isReversed: true },
  { id: 7, text: "I do not have a good imagination.", category: "openness", isReversed: true },
  { id: 8, text: "I am full of ideas.", category: "openness" },
  { id: 9, text: "I am fascinated by art, music, or literature.", category: "openness" },
  { id: 10, text: "I prefer sticking to routines rather than exploring new experiences.", category: "openness", isReversed: true },

  // Conscientiousness questions
  { id: 11, text: "I complete tasks successfully.", category: "conscientiousness" },
  { id: 12, text: "I like order and cleanliness.", category: "conscientiousness" },
  { id: 13, text: "I keep my promises.", category: "conscientiousness" },
  { id: 14, text: "I make plans and follow through with them.", category: "conscientiousness" },
  { id: 15, text: "I pay attention to details.", category: "conscientiousness" },
  { id: 16, text: "I often forget to put things back in their proper place.", category: "conscientiousness", isReversed: true },
  { id: 17, text: "I sometimes make a mess of things.", category: "conscientiousness", isReversed: true },
  { id: 18, text: "I leave my belongings around.", category: "conscientiousness", isReversed: true },
  { id: 19, text: "I am always prepared.", category: "conscientiousness" },
  { id: 20, text: "I work hard to accomplish my goals.", category: "conscientiousness" },

  // Extraversion questions
  { id: 21, text: "I am the life of the party.", category: "extraversion" },
  { id: 22, text: "I feel comfortable around people.", category: "extraversion" },
  { id: 23, text: "I start conversations.", category: "extraversion" },
  { id: 24, text: "I talk to a lot of different people at parties.", category: "extraversion" },
  { id: 25, text: "I don't mind being the center of attention.", category: "extraversion" },
  { id: 26, text: "I don't talk a lot.", category: "extraversion", isReversed: true },
  { id: 27, text: "I keep in the background.", category: "extraversion", isReversed: true },
  { id: 28, text: "I have little to say.", category: "extraversion", isReversed: true },
  { id: 29, text: "I am energized by being around others.", category: "extraversion" },
  { id: 30, text: "I feel drained when I have to socialize for too long.", category: "extraversion", isReversed: true },

  // Agreeableness questions
  { id: 31, text: "I am interested in people.", category: "agreeableness" },
  { id: 32, text: "I sympathize with others' feelings.", category: "agreeableness" },
  { id: 33, text: "I have a soft heart.", category: "agreeableness" },
  { id: 34, text: "I take time out for others.", category: "agreeableness" },
  { id: 35, text: "I feel others' emotions.", category: "agreeableness" },
  { id: 36, text: "I am not really interested in others.", category: "agreeableness", isReversed: true },
  { id: 37, text: "I insult people.", category: "agreeableness", isReversed: true },
  { id: 38, text: "I am not interested in other people's problems.", category: "agreeableness", isReversed: true },
  { id: 39, text: "I make people feel at ease.", category: "agreeableness" },
  { id: 40, text: "I rarely get into arguments, even when people disagree with me.", category: "agreeableness" },

  // Neuroticism questions
  { id: 41, text: "I get stressed out easily.", category: "neuroticism" },
  { id: 42, text: "I worry about things.", category: "neuroticism" },
  { id: 43, text: "I am easily disturbed.", category: "neuroticism" },
  { id: 44, text: "I change my mood a lot.", category: "neuroticism" },
  { id: 45, text: "I get irritated easily.", category: "neuroticism" },
  { id: 46, text: "I seldom feel blue.", category: "neuroticism", isReversed: true },
  { id: 47, text: "I am relaxed most of the time.", category: "neuroticism", isReversed: true },
  { id: 48, text: "I remain calm under pressure.", category: "neuroticism", isReversed: true },
  { id: 49, text: "I get upset easily.", category: "neuroticism" },
  { id: 50, text: "I often feel overwhelmed by emotions.", category: "neuroticism" },
];

export const categoryDescriptions = {
  openness: {
    title: "Openness to Experience",
    description: "Reflects a person's willingness to try new things and engage with new ideas.",
    high: "Curious, imaginative, artistic, and interested in many things.",
    low: "Practical, conventional, prefers routine and tradition.",
    color: "#9b87f5"
  },
  conscientiousness: {
    title: "Conscientiousness",
    description: "Reflects a person's reliability, organization, and persistence.",
    high: "Organized, dependable, disciplined, and achievement-oriented.",
    low: "Spontaneous, flexible, sometimes careless or disorganized.",
    color: "#0EA5E9"
  },
  extraversion: {
    title: "Extraversion",
    description: "Reflects a person's energy and preference for social interactions.",
    high: "Outgoing, energetic, talkative, and enjoys social situations.",
    low: "Reserved, thoughtful, prefers solitary activities, needs less stimulation.",
    color: "#F97316"
  },
  agreeableness: {
    title: "Agreeableness",
    description: "Reflects how a person interacts with others.",
    high: "Compassionate, cooperative, warm, values harmony with others.",
    low: "Direct, challenging, focused on their own needs and interests.",
    color: "#8B5CF6"
  },
  neuroticism: {
    title: "Neuroticism",
    description: "Reflects emotional stability and tendency to experience negative emotions.",
    high: "Sensitive, experiences stress and negative emotions more intensely.",
    low: "Emotionally stable, calm under pressure, less easily upset.",
    color: "#D946EF"
  }
};
