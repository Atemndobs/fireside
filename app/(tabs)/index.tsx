import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';

const HERO_VIDEOS = [
  'https://minio.goose-neon.ts.net/curator/assets/Riverside_high_pd.png', 
  'https://minio.goose-neon.ts.net/curator/assets/anyang_afro.jpg', 
  'https://minio.goose-neon.ts.net/curator/assets/Riverside_pod.png', 
  'https://images.pexels.com/photos/6883805/pexels-photo-6883805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
  'https://images.pexels.com/photos/270288/pexels-photo-270288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  // 'https://minio.goose-neon.ts.net/curator/assets/FireSide_Tribe.png'
// ,  'https://img.youtube.com/vi/slb67iDaLgE/maxresdefault.jpg',
  // 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.5foXVIgd6g8lg5OcYo2I6gHaEL%26pid%3DApi&f=1',
  // 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.byPUWkyhJy3cnZmiGVzu8QHaHb%26pid%3DApi&f=1',
  
];

const PODCAST_PLATFORMS = [
  { 
    name: 'Apple Podcasts',
    icon: 'https://minio.goose-neon.ts.net/curator/images/Apple-Podcasts-Logo.webp',
    url: 'https://podcasts.apple.com/' 
  },
  { 
    name: 'Spotify',
    icon: 'https://minio.goose-neon.ts.net/curator/assets/icons8-spotify-96.png',
    url: 'https://open.spotify.com/' 
  },
  { 
    name: 'Google Podcasts',
    icon: 'https://minio.goose-neon.ts.net/curator/assets/icons8-google-podcasts-96.png',
    url: 'https://podcasts.google.com/' 
  },
  { 
    name: 'Youtube',
    icon: 'https://minio.goose-neon.ts.net/curator/assets/icons8-youtube-94.png',
    url: '#' 
  },
];

export default function HomeScreen() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_VIDEOS.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <LinearGradient
        colors={['#8B1A1A', '#FF4500']}
        style={styles.heroContainer}>
        <Image
          source={{ uri: HERO_VIDEOS[currentImageIndex] }}
          style={styles.heroImage}
        />
        <View style={styles.heroContent}>
          {/* <Text style={styles.title}>Fireside Music Podcast</Text> */}
          <Text style={styles.title}>The Fireside Tribe</Text>
          <Text style={styles.subtitle}>
            ... by tripple A
          </Text>
          <Text style={styles.subtitle}>
            Cameroon music scene decoded, and the stories behind the sound!
          </Text>
          <Pressable style={styles.ctaButton}>
            <Text style={styles.ctaButtonText}>Coming Soon</Text>
          </Pressable>
        </View>
      </LinearGradient>

      {/* Latest Episodes Preview */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Latest Episodes</Text>
          <Link href="/episodes" style={styles.seeAllLink}>
            See All
          </Link>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Pressable style={styles.episodeCard}>
            <Image
              source={{ uri: 'https://www.newstoriesafrica.com/wp-content/uploads/2023/03/Krys-M-1024x932.jpg' }}
              style={styles.episodeImage}
            />
            <View style={styles.episodeInfo}>
              <Text style={styles.episodeTitle}>Krys M: What makes her Unique?</Text>
              <Text style={styles.episodeDate}>March 2025</Text>
            </View>
          </Pressable>
          <Pressable style={styles.episodeCard}>
            <Image
              source={{ uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.r3w5in7NgvD5IIGXu0PeOwHaHb%26pid%3DApi&f=1' }}
              style={styles.episodeImage}
            />
            <View style={styles.episodeInfo}>
              <Text style={styles.episodeTitle}>Kameni: What is next?</Text>
              <Text style={styles.episodeDate}>March 2025</Text>
            </View>
          </Pressable>
          <Pressable style={styles.episodeCard}>
            <Image
              source={{ uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.byPUWkyhJy3cnZmiGVzu8QHaHb%26pid%3DApi&f=1' }}
              style={styles.episodeImage}
            />
            <View style={styles.episodeInfo}>
              <Text style={styles.episodeTitle}>Blanche Bailly's Journey</Text>
              <Text style={styles.episodeDate}>April 2025</Text>
            </View>
          </Pressable>
          <Pressable style={styles.episodeCard}>
            <Image
              source={{ uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.5foXVIgd6g8lg5OcYo2I6gHaEL%26pid%3DApi&f=1' }}
              style={styles.episodeImage}
            />
            <View style={styles.episodeInfo}>
              <Text style={styles.episodeTitle}>Ko-c: Breaking Boundaries</Text>
              {/* <Text style={styles.episodeDate}>Mar 1, 2024</Text> */}
              <Text style={styles.episodeDate}>May 2025</Text>
            </View>
          </Pressable>
        </ScrollView>
      </View>

      {/* Listen On Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Listen On</Text>
        <View style={styles.platformsContainer}>
          {PODCAST_PLATFORMS.map((platform, index) => (
            <Pressable 
              key={index} 
              style={styles.platformButton}
              onPress={() => platform.url !== '#' && window.open(platform.url, '_blank')}>
              <Image 
                source={{ uri: platform.icon }} 
                style={styles.platformIcon}
                accessibilityLabel={platform.name}
              />
            </Pressable>
          ))}
        </View>
      </View>

      {/* Newsletter Signup */}
      <View style={[styles.section, styles.newsletterSection]}>
        <Text style={styles.sectionTitle}>Stay Connected</Text>
        <Text style={styles.newsletterText}>
          Subscribe to our newsletter for exclusive updates on Cameroon's music scene, artist features, and event announcements.
        </Text>
        <Pressable style={styles.subscribeButton}>
          <Text style={styles.subscribeButtonText}>Join the Community</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  heroContainer: {
    height: 500,
    justifyContent: 'flex-end',
  },
  heroImage: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.6,
  },
  heroContent: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#ffffff',
    marginBottom: 20,
    lineHeight: 24,
  },
  ctaButton: {
    backgroundColor: '#FF4500',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    alignSelf: 'flex-start',
  },
  ctaButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  section: {
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 15,
  },
  seeAllLink: {
    color: '#FF4500',
    fontSize: 16,
  },
  episodeCard: {
    width: 280,
    marginRight: 15,
    backgroundColor: '#2a2a2a',
    borderRadius: 15,
    overflow: 'hidden',
  },
  episodeImage: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
  episodeInfo: {
    padding: 15,
  },
  episodeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  episodeDate: {
    fontSize: 14,
    color: '#888888',
  },
  platformsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap:10,
  },
  platformButton: {
    backgroundColor: '#2a2a2a',
    padding: 15,
    borderRadius: 10,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  platformIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  newsletterSection: {
    backgroundColor: '#2a2a2a',
    borderRadius: 20,
    margin: 20,
    marginTop: 0,
  },
  newsletterText: {
    color: '#cccccc',
    fontSize: 16,
    marginBottom: 20,
  },
  subscribeButton: {
    backgroundColor: '#FF4500',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  subscribeButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});