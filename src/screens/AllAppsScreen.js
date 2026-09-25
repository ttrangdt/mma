import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SectionList,
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { IconSearch, IconPayslip } from '../components/icons/AppIcons';

const ALL_APPS_DATA = [
  {
    title: 'WORK',
    data: [
      {
        id: 'approve_now',
        name: 'Approve Now',
        description:
          'Notify managers of pending requests and allow managers to approve/reject requests from internal tools',
        icon: require('../../asset/ic_favourite_approve_now.png'),
      },
      {
        id: 'reward',
        name: 'Reward',
        description:
          'Send colleagues a thank you note or reward Gold for exceptional contribution',
        icon: require('../../asset/ic_favourite_recognition.png'),
      },
      {
        id: 'discipline',
        name: 'Discipline',
        description:
          'Send a discipline warning to subordinates for violation of codes of conduct',
        icon: require('../../asset/ic_favourite_discipline.png'),
      },
      {
        id: 'learning',
        name: 'Learning',
        description:
          'View a list of mandatory, registered and suggested learning courses; check-in and send feedback for each course',
        icon: require('../../asset/ic_favourite_learning.png'),
      },
      {
        id: 'my_tasks',
        name: 'My Tasks',
        description: '',
        icon: require('../../asset/ic_favorite_pear.webp'),
      },
    ],
  },
  {
    title: 'UTILITIES',
    data: [
      {
        id: 'fpt_care',
        name: 'FPT Care',
        description: 'FPT Care',
        icon: require('../../asset/ic_favourite_fpt_care.png'),
      },
      {
        id: 'events',
        name: 'Events',
        description:
          'Register, check-in, check-out, send feedback to company events and programs',
        icon: require('../../asset/ic_favourite_event.png'),
      },
      {
        id: 'survey',
        name: 'Survey',
        description:
          'Conduct and collect responses for company-wide or department-wide surveys',
        icon: require('../../asset/ic_favourite_survey.png'),
      },
      {
        id: 'fpt_dating',
        name: 'FPT Dating',
        description: 'Dating feature.',
        icon: require('../../asset/ic_favourite_dating.png'),
      },
      {
        id: 'payslip',
        name: 'Payslip',
        description: 'Payslip',
        IconComponent: IconPayslip,
      },
      {
        id: 'birthday',
        name: 'Birthday',
        description:
          "Your birthday is a special moment. We're very happy to send the best wishes for you. Colleagues can send you birthday wishes on myFPT.",
        icon: require('../../asset/ic_favourite_birthday.png'),
      },
    ],
  },
  {
    title: 'NEWS',
    data: [
      {
        id: 'news',
        name: 'News',
        description:
          'A collection of latest news and notable events around the company',
        icon: require('../../asset/ic_favourite_news.png'),
      },
      {
        id: 'star_ave',
        name: 'Star Ave',
        description:
          'Recognise notable achievements within a business unit or within FPT',
        icon: require('../../asset/ic_favourite_star_ave.png'),
      },
    ],
  },
  {
    title: 'WIKI',
    data: [
      {
        id: 'employee_info',
        name: 'Employee Info',
        description:
          'Basic, non-confidential employee information (name, gender, department, etc.)',
        icon: require('../../asset/ic_favourite_employee_info.png'),
      },
    ],
  },
  {
    title: 'GAME',
    data: [
      {
        id: 'game',
        name: 'Game',
        description: 'Community-engaging games with Gold as rewards',
        icon: require('../../asset/ic_favourite_game.png'),
      },
    ],
  },
];

export default function AllAppsScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = ALL_APPS_DATA.map((section) => {
    const filteredItems = section.data.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...section, data: filteredItems };
  }).filter((section) => section.data.length > 0);

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <View style={styles.searchBarRow}>
        <View style={styles.searchBox}>
          <View style={styles.searchIcon}>
            <IconSearch size={18} color="#8E8E93" />
          </View>
          <TextInput
            style={styles.searchInput}
            placeholder="Type feature's name"
            placeholderTextColor="#8E8E93"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Ionicons name="close-circle" size={16} color="#8E8E93" />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity style={styles.gridBtn}>
          <Ionicons name="grid-outline" size={24} color="#8E8E93" />
        </TouchableOpacity>
      </View>

      <Text style={styles.screenTitle}>All Apps</Text>
    </View>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemRow} activeOpacity={0.7}>
      <View style={styles.iconCircleContainer}>
        {item.IconComponent ? (
          <item.IconComponent size={46} />
        ) : (
          <Image source={item.icon} style={styles.itemIcon} />
        )}
      </View>
      <View style={styles.itemContent}>
        <Text style={styles.itemName}>{item.name}</Text>
        {item.description ? (
          <Text style={styles.itemDescription} numberOfLines={3}>
            {item.description}
          </Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <SectionList
        sections={filteredData}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderHeader}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.listContent}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  listContent: {
    paddingBottom: 20,
  },
  headerContainer: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 4,
    backgroundColor: '#FFFFFF',
  },
  searchBarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFEFF4',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 38,
  },
  searchIcon: {
    marginRight: 6,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#000000',
    paddingVertical: 0,
  },
  gridBtn: {
    marginLeft: 12,
    padding: 2,
  },
  screenTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  sectionHeader: {
    backgroundColor: '#EFEFF4',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#E5E5EA',
  },
  sectionHeaderText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#666666',
    letterSpacing: 0.5,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
  },
  iconCircleContainer: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#EEF4FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
    overflow: 'hidden',
  },
  itemIcon: {
    width: 46,
    height: 46,
    resizeMode: 'contain',
  },
  itemContent: {
    flex: 1,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 2,
  },
  itemDescription: {
    fontSize: 13,
    color: '#666666',
    lineHeight: 18,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#E5E5EA',
    marginLeft: 76,
  },
});
