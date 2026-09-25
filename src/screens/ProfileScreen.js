import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  IconMyProfile,
  IconSettings,
  IconSupport,
  IconFaq,
  IconAdmin,
  IconLogout,
} from '../components/icons/AppIcons';

export default function ProfileScreen() {
  const menuItems = [
    { id: 'profile', title: 'My Profile', IconComponent: IconMyProfile },
    { id: 'settings', title: 'Settings', IconComponent: IconSettings },
    { id: 'support', title: 'Support', IconComponent: IconSupport },
    { id: 'faq', title: 'FAQ', IconComponent: IconFaq },
    { id: 'admin', title: 'Admin', IconComponent: IconAdmin },
    { id: 'logout', title: 'Logout', IconComponent: IconLogout },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1D74E7" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Header Card */}
        <View style={styles.bannerContainer}>
          <Image
            source={require('../../asset/bg_banner_profile_male.png')}
            style={styles.bannerImage}
          />

          {/* Avatar Container */}
          <View style={styles.avatarWrapper}>
            <View style={styles.avatarCircle}>
              <Text style={styles.avatarInitial}>K</Text>
            </View>
            <TouchableOpacity style={styles.cameraBadge} activeOpacity={0.8}>
              <Ionicons name="camera" size={14} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>

        {/* User Info */}
        <View style={styles.userInfoSection}>
          <Text style={styles.userName}>Phạm Quang Khang (KHANGPQ3)</Text>
          <Text style={styles.userRole}>(BM SE)</Text>
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => {
            const IconComp = item.IconComponent;
            return (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.menuItem,
                  index === menuItems.length - 1 && styles.lastMenuItem,
                ]}
                activeOpacity={0.7}
              >
                <View style={styles.menuLeft}>
                  <View style={styles.menuIconBox}>
                    <IconComp size={22} color="#1D74E7" />
                  </View>
                  <Text style={styles.menuTitle}>{item.title}</Text>
                </View>
                <Ionicons name="chevron-forward" size={18} color="#C7C7CC" />
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Footer */}
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>myFPT Version 5.9.10</Text>
          <Text style={styles.footerText}>Copyright @ FPT Software 2021</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingBottom: 30,
  },
  bannerContainer: {
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 16,
    paddingTop: 12,
    width: '100%',
  },
  bannerImage: {
    width: '100%',
    height: 140,
    borderRadius: 12,
    resizeMode: 'cover',
  },
  avatarWrapper: {
    marginTop: -50,
    position: 'relative',
  },
  avatarCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#DDF0FF',
    borderWidth: 4,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  avatarInitial: {
    fontSize: 44,
    fontWeight: 'bold',
    color: '#1D74E7',
  },
  cameraBadge: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#777777',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userInfoSection: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
  },
  userRole: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    marginTop: 4,
  },
  menuContainer: {
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E5E5EA',
  },
  lastMenuItem: {
    borderBottomWidth: 0,
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIconBox: {
    width: 28,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  footerContainer: {
    marginTop: 36,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 13,
    color: '#8E8E93',
    marginVertical: 2,
  },
});
