import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SOCIAL_LINKS = [
  { id: 'twitter', name: '@thefiresidetribe', icon: 'logo-twitter', url: '#' },
  { id: 'instagram', name: '@thefiresidetribe', icon: 'logo-instagram', url: '#' },
  { id: 'youtube', name: '@thefiresidetribe', icon: 'logo-youtube', url: '#' },
  { id: 'tiktok', name: '@thefiresidetribe', icon: 'logo-tiktok', url: '#' },
];

const HOSTS = [
  {
    name: 'Atem Eunice A.',
    image: 'https://minio.goose-neon.ts.net/curator/images/euince_pod.jpg',
    bio: 'Tastemaker, and cultural curator with deep knowledge of Cameroonian music, from legends to rising stars. Well-connected in California’s media scene, she bridges African sounds with the global stage delivering insight, stories, and exclusives you won’t find anywhere els',
  },
    {
    name: 'Anyang',
    image: 'https://minio.goose-neon.ts.net/curator/assets/anyang_side_view.png',
    bio: 'Co-Founder of Frenchkind, a creative force in music and branding. A mentor to many Cameroonian artists, he brings insider insights and untold stories to the Fireside Podcast',
  },
  {
    name: 'Atem Keng',
    image:'https://minio.goose-neon.ts.net/curator/images/atem_pod.jpg',
    bio: 'DJ, producer, and tech expert with a sharp ear for sound quality and production. On the podcast, he breaks down the technical side of music and the industry behind it.',
  },

];

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          // source={{ uri: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800' }}
          source={{ uri: 'https://minio.goose-neon.ts.net/curator/assets/theFireSideTribe.png' }}
          style={styles.headerImage}
        />
        <View style={styles.overlay} />
        <Text style={styles.title}>About Us</Text>
      </View>

      <View style={styles.content}>
        {/* Hosts Section Moved to Top */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Meet Your Hosts, tripple A </Text>
          {HOSTS.map((host) => (
            <View key={host.name} style={styles.hostSection}>
              <Image
                source={{ uri: host.image }}
                style={styles.hostImage}
              />
              <Text style={styles.hostName}>{host.name}</Text>
              <Text style={styles.hostBio}>{host.bio}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Mission</Text>
          <Text style={styles.text}>
          The Fireside Tribe is your go-to podcast for deep, unfiltered conversations about Cameroonian music. 
          We explore the sounds, stories, and struggles of artists, offering fresh perspectives on the industry’s 
          evolution and its place in the global music landscape.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What We Cover</Text>
          <View style={styles.topicsList}>
            <Text style={styles.topicItem}>Up-and-coming Cameroonian artists</Text>
            <Text style={styles.topicItem}>Established Cameroonian stars</Text>
            <Text style={styles.topicItem}>Cameroon's impact on global music</Text>
            <Text style={styles.topicItem}>Deep dives with local artists</Text>
            <Text style={styles.topicItem}>Local events and festival coverage</Text>
            <Text style={styles.topicItem}>Industry insights and analysis</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Connect With Us</Text>
          <View style={styles.socialLinks}>
            {SOCIAL_LINKS.map((link) => (
              <Pressable key={link.id} style={styles.socialButton}>
                <Ionicons name={link.icon} size={24} color="#FF4500" />
                <Text style={styles.socialText}>{link.name}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Get Early Access</Text>
          <Pressable style={styles.contactButton}>
            <Ionicons name="mail" size={24} color="#ffffff" />
            <Text style={styles.contactButtonText}>Join the waitlst</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  header: {
    height: 300,
    justifyContent: 'flex-end',
    padding: 20,
  },
  headerImage: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  content: {
    padding: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    color: '#cccccc',
    lineHeight: 24,
  },
  topicsList: {
    gap: 12,
  },
  topicItem: {
    fontSize: 16,
    color: '#cccccc',
    marginBottom: 8,
  },
  hostSection: {
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  hostImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15,
  },
  hostName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  hostBio: {
    fontSize: 16,
    color: '#cccccc',
    textAlign: 'center',
    lineHeight: 24,
  },
  socialLinks: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
    padding: 15,
    borderRadius: 10,
    minWidth: 150,
  },
  socialText: {
    color: '#ffffff',
    marginLeft: 8,
    fontSize: 16,
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF4500',
    padding: 15,
    borderRadius: 10,
  },
  contactButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
