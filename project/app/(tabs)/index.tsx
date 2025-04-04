import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Brain, Heart, Smile, Sun } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const { isDark } = useTheme();
  const { t } = useLanguage();
  const router = useRouter();

  return (
    <ScrollView style={[styles.container, isDark && styles.containerDark]}>
      <View style={[styles.header, isDark && styles.headerDark]}>
        <Text style={[styles.greeting, isDark && styles.textLightDark]}>{t('welcome')}</Text>
        <Text style={[styles.title, isDark && styles.textDark]}>{t('howAreYouFeeling')}</Text>
      </View>

      <View style={styles.moodGrid}>
        <TouchableOpacity style={[styles.moodCard, isDark && styles.moodCardDark]}>
          <Smile size={32} color="#10b981" />
          <Text style={[styles.moodText, isDark && styles.textDark]}>{t('happy')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.moodCard, isDark && styles.moodCardDark]}>
          <Sun size={32} color="#f59e0b" />
          <Text style={[styles.moodText, isDark && styles.textDark]}>{t('okay')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.moodCard, isDark && styles.moodCardDark]}>
          <Heart size={32} color="#ef4444" />
          <Text style={[styles.moodText, isDark && styles.textDark]}>{t('sad')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.moodCard, isDark && styles.moodCardDark]}>
          <Brain size={32} color="#8b5cf6" />
          <Text style={[styles.moodText, isDark && styles.textDark]}>{t('anxious')}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => router.push('/chat')}>
        <LinearGradient
          colors={['#6366f1', '#4f46e5']}
          style={styles.aiChatButton}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}>
          <Text style={styles.aiChatButtonText}>{t('startSession')}</Text>
        </LinearGradient>
      </TouchableOpacity>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, isDark && styles.textDark]}>{t('dailyActivities')}</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.activitiesScroll}>
          {[
            { name: 'meditation', duration: '5-10' },
            { name: 'breathing', duration: '3-5' },
            { name: 'journaling', duration: '10-15' },
            { name: 'exercise', duration: '15-20' },
          ].map((activity, index) => (
            <TouchableOpacity key={index} style={[styles.activityCard, isDark && styles.activityCardDark]}>
              <Text style={[styles.activityTitle, isDark && styles.textDark]}>{t(activity.name)}</Text>
              <Text style={[styles.activityDuration, isDark && styles.textLightDark]}>{activity.duration} min</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, isDark && styles.textDark]}>CBT Techniques</Text>
        <View style={[styles.cbtCard, isDark && styles.cbtCardDark]}>
          <Text style={[styles.cbtTitle, isDark && styles.textDark]}>Thought Record</Text>
          <Text style={[styles.cbtDescription, isDark && styles.textLightDark]}>
            Track and challenge negative thoughts to improve your mood.
          </Text>
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
  greeting: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#64748b',
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    color: '#1e293b',
    marginTop: 4,
  },
  moodGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    gap: 16,
  },
  moodCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    width: '45%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  moodCardDark: {
    backgroundColor: '#334155',
  },
  moodText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: '#475569',
    marginTop: 8,
  },
  aiChatButton: {
    margin: 24,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  aiChatButtonText: {
    fontFamily: 'Inter_600SemiBold',
    color: '#ffffff',
    fontSize: 16,
  },
  section: {
    padding: 24,
  },
  sectionTitle: {
    fontFamily: 'Inter_700Bold',
    fontSize: 20,
    color: '#1e293b',
    marginBottom: 16,
  },
  activitiesScroll: {
    marginLeft: -8,
  },
  activityCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 8,
    width: 140,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  activityCardDark: {
    backgroundColor: '#334155',
  },
  activityTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#1e293b',
  },
  activityDuration: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
  },
  cbtCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cbtCardDark: {
    backgroundColor: '#334155',
  },
  cbtTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: '#1e293b',
    marginBottom: 8,
  },
  cbtDescription: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
  },
  textDark: {
    color: '#f1f5f9',
  },
  textLightDark: {
    color: '#94a3b8',
  },
});