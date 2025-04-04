import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Bell, Lock, Moon, Settings, Shield, Globe } from 'lucide-react-native';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const { isDark, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.replace('/login');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'tr' : 'en');
  };

  return (
    <ScrollView style={[styles.container, isDark && styles.containerDark]}>
      <View style={[styles.header, isDark && styles.headerDark]}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{user?.name?.substring(0, 2).toUpperCase() || 'JD'}</Text>
        </View>
        <Text style={[styles.name, isDark && styles.textDark]}>{user?.name || 'John Doe'}</Text>
        <Text style={[styles.email, isDark && styles.textLightDark]}>{user?.email || 'john.doe@example.com'}</Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, isDark && styles.textDark]}>{t('settings')}</Text>
        
        <TouchableOpacity style={[styles.menuItem, isDark && styles.menuItemDark]}>
          <View style={styles.menuItemLeft}>
            <Bell size={24} color="#6366f1" />
            <Text style={[styles.menuItemText, isDark && styles.textDark]}>{t('notifications')}</Text>
          </View>
          <Text style={[styles.menuItemValue, isDark && styles.textLightDark]}>On</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.menuItem, isDark && styles.menuItemDark]} 
          onPress={toggleTheme}
        >
          <View style={styles.menuItemLeft}>
            <Moon size={24} color="#6366f1" />
            <Text style={[styles.menuItemText, isDark && styles.textDark]}>{t('darkMode')}</Text>
          </View>
          <Text style={[styles.menuItemValue, isDark && styles.textLightDark]}>{isDark ? 'On' : 'Off'}</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.menuItem, isDark && styles.menuItemDark]}
          onPress={toggleLanguage}
        >
          <View style={styles.menuItemLeft}>
            <Globe size={24} color="#6366f1" />
            <Text style={[styles.menuItemText, isDark && styles.textDark]}>{t('language')}</Text>
          </View>
          <Text style={[styles.menuItemValue, isDark && styles.textLightDark]}>{language.toUpperCase()}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.menuItem, isDark && styles.menuItemDark]}>
          <View style={styles.menuItemLeft}>
            <Lock size={24} color="#6366f1" />
            <Text style={[styles.menuItemText, isDark && styles.textDark]}>{t('privacy')}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.menuItem, isDark && styles.menuItemDark]}>
          <View style={styles.menuItemLeft}>
            <Shield size={24} color="#6366f1" />
            <Text style={[styles.menuItemText, isDark && styles.textDark]}>{t('security')}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.menuItem, isDark && styles.menuItemDark]}>
          <View style={styles.menuItemLeft}>
            <Settings size={24} color="#6366f1" />
            <Text style={[styles.menuItemText, isDark && styles.textDark]}>{t('settings')}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, isDark && styles.textDark]}>About</Text>
        <View style={[styles.aboutCard, isDark && styles.aboutCardDark]}>
          <Text style={[styles.aboutTitle, isDark && styles.textDark]}>MindGuard AI Assistant</Text>
          <Text style={[styles.aboutVersion, isDark && styles.textLightDark]}>Version 1.0.0</Text>
          <Text style={[styles.aboutDescription, isDark && styles.textDark]}>
            Your personal AI-powered mental health companion. We're here to support your emotional well-being 24/7.
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>{t('logout')}</Text>
      </TouchableOpacity>
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
    alignItems: 'center',
    padding: 24,
    paddingTop: 60,
    backgroundColor: '#ffffff',
  },
  headerDark: {
    backgroundColor: '#334155',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#6366f1',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarText: {
    color: '#ffffff',
    fontSize: 24,
    fontFamily: 'Inter_600SemiBold',
  },
  name: {
    fontSize: 24,
    color: '#1e293b',
    fontFamily: 'Inter_700Bold',
  },
  email: {
    fontSize: 16,
    color: '#64748b',
    marginTop: 4,
    fontFamily: 'Inter_400Regular',
  },
  section: {
    padding: 24,
  },
  sectionTitle: {
    fontSize: 20,
    color: '#1e293b',
    marginBottom: 16,
    fontFamily: 'Inter_700Bold',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    backgroundColor: '#ffffff',
  },
  menuItemDark: {
    backgroundColor: '#334155',
    borderBottomColor: '#475569',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 16,
    color: '#1e293b',
    marginLeft: 12,
    fontFamily: 'Inter_400Regular',
  },
  menuItemValue: {
    fontSize: 16,
    color: '#64748b',
    fontFamily: 'Inter_400Regular',
  },
  aboutCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  aboutCardDark: {
    backgroundColor: '#334155',
  },
  aboutTitle: {
    fontSize: 18,
    color: '#1e293b',
    fontFamily: 'Inter_600SemiBold',
  },
  aboutVersion: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
    fontFamily: 'Inter_400Regular',
  },
  aboutDescription: {
    fontSize: 14,
    color: '#475569',
    marginTop: 12,
    lineHeight: 20,
    fontFamily: 'Inter_400Regular',
  },
  logoutButton: {
    margin: 24,
    padding: 16,
    backgroundColor: '#ef4444',
    borderRadius: 12,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
  },
  textDark: {
    color: '#f1f5f9',
  },
  textLightDark: {
    color: '#94a3b8',
  },
});