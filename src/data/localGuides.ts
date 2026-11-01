import { LOCAL_GUIDE_META } from './localGuideMeta';
import { LOCAL_GUIDE_CONTENT_A } from './localGuideContentA';
import { LOCAL_GUIDE_CONTENT_B } from './localGuideContentB';
export interface LocalGuideContent {
  heading: string;
  scenario: string;
  explanation: string;
  practicalStep: string;
  faq: { question: string; answer: string }[];
  insightQuestion: string;
  insightAnswer: string;
  insightStep: string;
}
export interface LocalGuide extends LocalGuideContent {
  name: string;
  kind: string;
  municipality: string;
  route: string;
  source?: string | null;
  geographyNote: string;
  regional?: string[];
  officialParent?: string;
  parentOfficialName?: string;
  parentRoute?: string;
}
const articles: Record<string, LocalGuideContent> = {...LOCAL_GUIDE_CONTENT_A, ...LOCAL_GUIDE_CONTENT_B};
export const LOCAL_GUIDES: LocalGuide[] = LOCAL_GUIDE_META.map(meta => {
  const content = articles[meta.route];
  if (!content) throw new Error(`Conteúdo local ausente: ${meta.route}`);
  return {...meta, ...content};
});
export const getLocalGuide = (path: string) => LOCAL_GUIDES.find(item => item.route === (path.split(/[?#]/)[0].toLowerCase().replace(/\/+$/, '') || '/'));
