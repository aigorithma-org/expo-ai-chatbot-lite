import {
  useChat as useChatReact,
  // useCompletion as useCompletionReact,
  // useAssistant as useAssistantReact,
  // experimental_useObject as experimental_useObjectReact,
} from './useChat';

export const useChat = useChatReact;
// export const useCompletion = useCompletionReact;
// export const useAssistant = useAssistantReact;
// export const experimental_useObject = experimental_useObjectReact;
export type {
  CreateMessage,
  Message,
  UseChatOptions,
  UseChatHelpers,
} from './useChat';
