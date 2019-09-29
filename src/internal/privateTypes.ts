import { DeviceType, LocationProviderInfo, PowerState } from './types';

export type NotchDevice = {
  brand: string;
  model: string;

  [key: string]: string;
};

export interface DeviceInfoNativeModule {
  uniqueId: string
  deviceId: string
  systemName: string
  systemVersion: string
  bundleId: string
  appName: string
  buildNumber: string
  appVersion: string
  isTablet: boolean;
  getSystemManufacturer: () => Promise<string>;
  getSystemManufacturerSync: () => string;
  getBrand: () => Promise<string>;
  getBrandSync: () => string;
  getModel: () => string;
  getBuildId: () => Promise<string>;
  getBuildIdSync: () => string;
  getReadableVersion: () => Promise<string>;
  getReadableVersionSync: () => string;
  getDeviceName: () => Promise<string>;
  getDeviceNameSync: () => string;
  getUsedMemory: () => Promise<number>;
  getUsedMemorySync: () => number;
  getUserAgent: () => Promise<string>;
  getUserAgentSync: () => string;
  getInstanceId: () => Promise<string>;
  getInstanceIdSync: () => string;
  getInstallReferrer: () => Promise<string>;
  getInstallReferrerSync: () => string;
  isEmulator: () => Promise<boolean>;
  isEmulatorSync: () => boolean;
  getFontScale: () => Promise<number>;
  getFontScaleSync: () => number;
  getBootloader: () => Promise<string>;
  getBootloaderSync: () => string;
  getDevice: () => Promise<string>;
  getDeviceSync: () => string;
  getDisplay: () => Promise<string>;
  getDisplaySync: () => string;
  getFingerprint: () => Promise<string>;
  getFingerprintSync: () => string;
  getHardware: () => Promise<string>;
  getHardwareSync: () => string;
  getHost: () => Promise<string>;
  getHostSync: () => string;
  getProduct: () => Promise<string>;
  getProductSync: () => string;
  getTags: () => Promise<string>;
  getTagsSync: () => string;
  getType: () => Promise<string>;
  getTypeSync: () => string;
  getBaseOs: () => Promise<string>;
  getBaseOsSync: () => string;
  getPreviewSdkInt: () => Promise<number>;
  getPreviewSdkIntSync: () => number;
  getSecurityPatch: () => Promise<string>;
  getSecurityPatchSync: () => string;
  getCodename: () => Promise<string>;
  getCodenameSync: () => string;
  getIncremental: () => Promise<string>;
  getIncrementalSync: () => string;
  isPinOrFingerprintSet: () => Promise<boolean>;
  isPinOrFingerprintSetSync: () => boolean;
  hasNotch: () => Promise<boolean>;
  hasNotchSync: () => boolean;
  getFirstInstallTime: () => Promise<number>;
  getFirstInstallTimeSync: () => number;
  getLastUpdateTime: () => Promise<number>;
  getLastUpdateTimeSync: () => number;
  getSerialNumber: () => Promise<string>;
  getSerialNumberSync: () => string;
  getAndroidId: () => Promise<string>;
  getAndroidIdSync: () => string;
  getApiLevel: () => Promise<number>;
  getApiLevelSync: () => number;
  getIpAddress: () => Promise<string>;
  getIpAddressSync: () => string;
  isCameraPresent: () => Promise<boolean>;
  isCameraPresentSync: () => boolean;
  getMacAddress: () => Promise<string>;
  getMacAddressSync: () => string;
  getPhoneNumber: () => Promise<string>;
  getPhoneNumberSync: () => string;
  getCarrier: () => Promise<string>;
  getCarrierSync: () => string;
  getTotalMemory: () => Promise<number>;
  getTotalMemorySync: () => number;
  getMaxMemory: () => Promise<number>;
  getMaxMemorySync: () => number;
  getTotalDiskCapacity: () => Promise<number>;
  getTotalDiskCapacitySync: () => number;
  getFreeDiskStorage: () => Promise<number>;
  getFreeDiskStorageSync: () => number;
  getBatteryLevel: () => Promise<number>;
  getBatteryLevelSync: () => number;
  getPowerState: () => Promise<PowerState>;
  getPowerStateSync: () => PowerState;
  isBatteryCharging: () => Promise<boolean>;
  isBatteryChargingSync: () => boolean;
  isLandscape: () => Promise<boolean>;
  isLandscapeSync: () => boolean;
  isAirplaneMode: () => Promise<boolean>;
  isAirplaneModeSync: () => boolean;
  getDeviceType: () => Promise<DeviceType>;
  getDeviceTypeSync: () => DeviceType;
  getSupportedAbis: () => Promise<string[]>;
  getSupportedAbisSync: () => string[];
  getSupported32BitAbis: () => Promise<string[]>;
  getSupported32BitAbisSync: () => string[];
  getSupported64BitAbis: () => Promise<string[]>;
  getSupported64BitAbisSync: () => string[];
  hasSystemFeature: (feature: string) => Promise<boolean>;
  hasSystemFeatureSync: (feature: string) => boolean;
  getSystemAvailableFeatures: () => Promise<string[]>;
  getSystemAvailableFeaturesSync: () => string[];
  isLocationEnabled: () => Promise<boolean>;
  isLocationEnabledSync: () => boolean;
  getAvailableLocationProviders: () => Promise<LocationProviderInfo>;
  getAvailableLocationProvidersSync: () => LocationProviderInfo;
}