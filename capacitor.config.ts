import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mycollegeai.app',
  appName: 'MY COLLEGE AI',
  webDir: 'dist',
  
  server: {
    // Production: use the live website
    url: 'https://mycolleg.com',
    cleartext: false,
    androidScheme: 'https',
    // Allow navigation to these domains
    allowNavigation: [
      'mycolleg.com',
      'www.mycolleg.com',
      '*.mycolleg.com',
    ],
  },

  ios: {
    contentInset: 'automatic',
    scrollEnabled: true,
    backgroundColor: '#1a1f36',
    preferredContentMode: 'mobile',
    // Allow camera and file access
    allowsLinkPreview: false,
    handleApplicationNotifications: true,
  },

  plugins: {
    // Push Notifications
    PushNotifications: {
      presentationOptions: ['badge', 'sound', 'alert'],
    },
    
    // Camera
    Camera: {
      permissions: ['camera', 'photos'],
    },
    
    // Status Bar
    StatusBar: {
      style: 'Dark',
      backgroundColor: '#1a1f36',
      overlaysWebView: false,
    },
    
    // Splash Screen
    SplashScreen: {
      launchShowDuration: 2000,
      launchAutoHide: true,
      backgroundColor: '#1a1f36',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false,
      splashFullScreen: true,
      splashImmersive: true,
    },
    
    // Keyboard
    Keyboard: {
      resize: 'body',
      style: 'dark',
      resizeOnFullScreen: true,
    },
    
    // App
    App: {
      launchUrl: 'https://mycolleg.com',
    },
  },
};

export default config;
