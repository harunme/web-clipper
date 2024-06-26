import { IExtensionWithId, IContextMenusWithId } from '@/extensions/common';
import { Token } from 'typedi';

export interface Extension {
  //
}

export interface IExtensionService {
  init(): Promise<void>;
  DefaultExtensionId: string | null;

  DisabledExtensionIds: string[];

  EnabledAutomaticExtensionIds: string[];

  getExtensionConfig<T>(id: string): T | undefined;

  setExtensionConfig<T = any>(id: string, data: T): Promise<void>;

  toggleDefault(id: string): Promise<void>;

  toggleDisableExtension(id: string): Promise<void>;

  toggleAutomaticExtension(id: string): Promise<void>;
}

export interface IExtensionContainer {
  init(): Promise<void>;
  extensions: IExtensionWithId[];
  contextMenus: IContextMenusWithId[];
}

export const IExtensionService = new Token<IExtensionService>();

export const IExtensionContainer = new Token<IExtensionContainer>();
