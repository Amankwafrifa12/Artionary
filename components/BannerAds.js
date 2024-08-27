import { Platform } from 'react-native';

export const BannerAds = {
 
  BANNER: '',
  
  
  ...Platform.select({
    android: {
      
      BANNER: 'ca-app-pub-6312205639979010/4421105788',
      
    },
    ios: {
    
      BANNER: 'ca-app-pub-6312205639979010/4421105788',
      
    },
  }),
};
