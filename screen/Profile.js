import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Avatar.Image size={120}   source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_-igLXcILLWHwUXTnnRJ7kO9cOSZ9olaytg&usqp=CAU' }} />
      <Text style={styles.name}>Rowena Suizo</Text>
      <Text style={styles.email}>rowena.suizo@example.com</Text>
      <Card style={styles.card}>
        <Card.Content>
          <Title>About Me</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod.
          </Paragraph>
        </Card.Content>
      </Card>
      <Button icon="pencil" mode="outlined" onPress={() => console.log('Edit Profile')}>
        Edit Profile
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
  email: {
    fontSize: 16,
    color: 'gray',
  },
  card: {
    width: '80%',
    marginVertical: 20,
  },
});

export default ProfileScreen;
