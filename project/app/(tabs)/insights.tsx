import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ChartLine as LineChart } from 'lucide-react-native';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';

export default function InsightsScreen() {
  const { isDark } = useTheme();
  const { t } = useLanguage();

  const moodData = [
    { day: 'Mon', score: 7 },
    { day: 'Tue', score: 6 },
    { day: 'Wed', score: 8 },
    { day: 'Thu', score: 7 },
    { day: 'Fri', score: 9 },
    { day: 'Sat', score: 8 },
    { day: 'Sun', score: 8 },
  ];

  return (
    <ScrollView style={[styles.container, isDark && styles.containerDark]}>
      <View style={[styles.header, isDark && styles.headerDark]}>
        <Text style={[styles.headerTitle, isDark && styles.textDark]}>Your Insights</Text>
        <Text style={[styles.headerSubtitle, isDark && styles.textLightDark]}>
          Track your emotional well-being
        </Text>
      </View>

      <View style={[styles.card, isDark && styles.cardDark]}>
        <View style={styles.cardHeader}>
          <Text style={[styles.cardTitle, isDark && styles.textDark]}>Weekly Mood</Text>
          <LineChart size={24} color={isDark ? '#6366f1' : '#6366f1'} />
        </View>
        <View style={styles.moodChart}>
          {moodData.map((data, index) => (
            <View key={index} style={styles.moodBar}>
              <View style={[styles.moodBarFill, { height: `${data.score * 10}%` }]} />
              <Text style={[styles.moodDay, isDark && styles.textLightDark]}>{data.day}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={[styles.card, isDark && styles.cardDark]}>
        <Text style={[styles.cardTitle, isDark && styles.textDark]}>Activity Streak</Text>
        <View style={styles.statsGrid}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>7</Text>
            <Text style={[styles.statLabel, isDark && styles.textLightDark]}>Days Active</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>12</Text>
            <Text style={[styles.statLabel, isDark && styles.textLightDark]}>Sessions</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>85%</Text>
            <Text style={[styles.statLabel, isDark && styles.textLightDark]}>Completion</Text>
          </View>
        </View>
      </View>

      <View style={[styles.card, isDark && styles.cardDark]}>
        <Text style={[styles.cardTitle, isDark && styles.textDark]}>Recent Achievements</Text>
        <View style={styles.achievementList}>
          {['First Chat Session', 'Week Streak', 'Mood Tracker'].map((achievement, index) => (
            <View key={index} style={styles.achievementItem}>
              <View style={styles.achievementIcon} />
              <Text style={[styles.achievementText, isDark && styles.textDark]}>{achievement}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  containerDark: {
    backgroundColor: '#1e293b',
  },
  header: {
    padding: 24,
    paddingTop: 60,
    backgroundColor: '#ffffff',
  },
  headerDark: {
    backgroundColor: '#334155',
  },
  headerTitle: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    color: '#1e293b',
  },
  headerSubtitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#64748b',
    marginTop: 4,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardDark: {
    backgroundColor: '#334155',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: '#1e293b',
  },
  moodChart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 200,
  },
  moodBar: {
    width: 30,
    alignItems: 'center',
  },
  moodBarFill: {
    width: 8,
    backgroundColor: '#6366f1',
    borderRadius: 4,
  },
  moodDay: {
    marginTop: 8,
    fontSize: 12,
    color: '#64748b',
    fontFamily: 'Inter_400Regular',
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    color: '#6366f1',
    fontFamily: 'Inter_700Bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
    fontFamily: 'Inter_400Regular',
  },
  achievementList: {
    marginTop: 16,
  },
  achievementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  achievementIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#6366f1',
    marginRight: 12,
  },
  achievementText: {
    fontSize: 16,
    color: '#1e293b',
    fontFamily: 'Inter_400Regular',
  },
  textDark: {
    color: '#f1f5f9',
  },
  textLightDark: {
    color: '#94a3b8',
  },
});