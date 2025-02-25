import { View, Text, StyleSheet, FlatList, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Episode {
  id: string;
  title: string;
  date: string;
  duration: string;
  image: string;
  description: string;
}

const EPISODES = [
  {
    id: '1',
    title: 'Krys M: What makes her Unique?',
    date: 'March 2025',
    duration: '45 min',
    image: 'https://www.newstoriesafrica.com/wp-content/uploads/2023/03/Krys-M-1024x932.jpg',
    description: 'Dive deep into the journey of Krys M, one of Cameroon\'s most promising new voices, as she shares her story of breaking into the music scene.',
  },
  {
    id: '5',
    title: 'Kameni: What is next ?',
    date: 'March 2025',
    duration: '45 min',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.r3w5in7NgvD5IIGXu0PeOwHaHb%26pid%3DApi&f=1',
    description: 'Dive deep into the journey of Kameni, one of Cameroon\'s most promising new voices, as she shares her story of breaking into the music scene.',
  },
  {
    id: '2',
    title: 'Blanche Bailly: Redefining Afropop',
    date: 'April 2025',
    duration: '38 min',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.byPUWkyhJy3cnZmiGVzu8QHaHb%26pid%3DApi&f=1',
    description: 'Join us for an exclusive interview with Blanche Bailly as she discusses her impact on Cameroon\'s music industry and her vision for the future.',
  },
  {
    id: '3',
    title: 'Ko-c: Breaking International Boundaries',
    date: 'May 2025',
    duration: '42 min',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.5foXVIgd6g8lg5OcYo2I6gHaEL%26pid%3DApi&f=1',
    description: 'Ko-c shares his journey from local sensation to international recognition, discussing his unique style and future collaborations.',
  },
  {
    id: '4',
    title: 'Tayc: Going Global',
    date: 'June 2025',
    duration: '35 min',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.GT52o8jwL9nkeMfVCdrcCwHaEK%26pid%3DApi&f=1&ipt=a1bf8e12f282ed6f183eb210d9d28afbdd07cbe8003b6e6e1c4d1aeaafb44ec8&ipo=images',
    description: 'Explore the journey of Tayc, the Cameroonian artist making waves on the international music scene.',
  },
];

export default function EpisodesScreen() {
  const renderEpisode = ({ item }) => (
    <Pressable style={styles.episodeCard}>
      <Image source={{ uri: item.image }} style={styles.episodeImage} />
      <View style={styles.episodeContent}>
        <View style={styles.episodeHeader}>
          <Text style={styles.episodeTitle}>{item.title}</Text>
          <Pressable style={styles.playButton}>
            <Ionicons name="play" size={24} color="#FF4500" />
          </Pressable>
        </View>
        <Text style={styles.episodeDescription}>{item.description}</Text>
        <View style={styles.episodeMeta}>
          <Text style={styles.episodeDate}>{item.date}</Text>
          <Text style={styles.episodeDuration}>{item.duration}</Text>
        </View>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Episodes</Text>
        <Text style={styles.subtitle}>Dive into Cameroon's music scene</Text>
      </View>
      <FlatList
        data={EPISODES}
        renderItem={renderEpisode}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  header: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#2a2a2a',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#cccccc',
  },
  listContainer: {
    padding: 20,
  },
  episodeCard: {
    backgroundColor: '#2a2a2a',
    borderRadius: 15,
    marginBottom: 20,
    overflow: 'hidden',
  },
  episodeImage: {
    width: '100%',
    height: 200,
  },
  episodeContent: {
    padding: 15,
  },
  episodeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  episodeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    flex: 1,
    marginRight: 10,
  },
  playButton: {
    width: 44,
    height: 44,
    backgroundColor: '#333333',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  episodeDescription: {
    fontSize: 16,
    color: '#cccccc',
    marginBottom: 15,
    lineHeight: 24,
  },
  episodeMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  episodeDate: {
    fontSize: 14,
    color: '#888888',
  },
  episodeDuration: {
    fontSize: 14,
    color: '#888888',
  },
});