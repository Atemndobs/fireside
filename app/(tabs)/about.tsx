import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SOCIAL_LINKS = [
  { name: 'Twitter', icon: 'logo-twitter', url: '#' },
  { name: 'Instagram', icon: 'logo-instagram', url: '#' },
  { name: 'YouTube', icon: 'logo-youtube', url: '#' },
];

const HOSTS = [
  {
    name: 'Eunice A.',
    image: 'https://minio.goose-neon.ts.net/curator/images/euince_pod.jpg',
    bio: 'Tastemaker, and cultural curator with deep knowledge of Cameroonian music, from legends to rising stars. Well-connected in California’s media scene, she bridges African sounds with the global stage delivering insight, stories, and exclusives you won’t find anywhere els',
  },
    {
    name: 'Anyangatia ',
    image: 'https://scontent-phx1-1.cdninstagram.com/v/t51.29350-15/119048148_346757493133637_2993709151330502877_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi42ODF4NjgxLnNkci5mMjkzNTAuZGVmYXVsdF9pbWFnZSJ9&_nc_ht=scontent-phx1-1.cdninstagram.com&_nc_cat=105&_nc_oc=Q6cZ2AEqjY36iJ92T4mkUMfp4DFbm6QGKZFoe0Y-AFzmRjigrEGUVTY7aPLwksqODZ5HmOXKugm_3mSLWs-bijcZ4fEv&_nc_ohc=8e_lOLybMuMQ7kNvgFE-U63&_nc_gid=b79e4f6160454a58a782fa31e228eb8d&edm=AEvXrH8BAAAA&ccb=7-5&ig_cache_key=MjM5NTE2NDk4OTE3MzYzNzczOA%3D%3D.3-ccb7-5&oh=00_AYAFCQWmi4DE2AO_tymcSFYRULmxzw1ahJF1IOmhBRKp0A&oe=67B921FA&_nc_sid=90379d',
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
          source={{ uri: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800' }}
          style={styles.headerImage}
        />
        <View style={styles.overlay} />
        <Text style={styles.title}>About Cameroon Music Pulse</Text>
      </View>

      <View style={styles.content}>
        {/* Hosts Section Moved to Top */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Meet Your Hosts</Text>
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
            Cameroon Music Pulse is your premier destination for everything about Cameroon's music scene. 
            We're dedicated to showcasing both established stars and emerging talents, providing deep 
            insights into the music that's shaping Cameroonian culture and influencing the global music landscape.
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
              <Pressable key={link.name} style={styles.socialButton}>
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
    gap: 10,
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
    marginLeft: 10,
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