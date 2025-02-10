import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import roLanguage from '../../../assets/language/ro';

interface WebsiteState {
  deviceType: string;
  language: string;
  languageData: any;
  loading: boolean;
  selectedRoute: string;
  notification: {
    alertsCount: number;
  };
}

const initialState: WebsiteState = {
  deviceType: 'desktop',
  language: 'ro',
  languageData: roLanguage,
  loading: false,
  selectedRoute: '/dashboard',
  notification: {
    alertsCount: 0,
  },
};

const websiteSlice = createSlice({
  name: 'website',
  initialState,
  reducers: {
    setDeviceType(state, action: PayloadAction<{ deviceType: string }>) {
      state.deviceType = action.payload.deviceType;
    },
    setLanguage(state, action: PayloadAction<{ language: string }>) {
      state.language = action.payload.language;
    },
    setLanguageData(state, action: PayloadAction<{ languageData: any }>) {
      state.languageData = action.payload.languageData;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setSelectedRoute(state, action: PayloadAction<string>) {
      state.selectedRoute = action.payload;
    },
    setNotification(state, action: PayloadAction<{ alertsCount: number }>) {
      state.notification.alertsCount = action.payload.alertsCount;
    },
  },
});

export const websiteActions = websiteSlice.actions;
export default websiteSlice.reducer;