import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../state/state';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;