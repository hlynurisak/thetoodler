import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MaterialIcons } from '@expo/vector-icons';

export default function EditTaskModal({
  visible,
  onClose,
  onEditTask,
  taskName,
  setTaskName,
  taskDescription,
  setTaskDescription,
  taskIsFinished,
  setTaskIsFinished,
  selectedList,
  setSelectedList,
  lists,
  onDelete,
}: {
  visible: boolean;
  onClose: () => void;
  onEditTask: () => void;
  taskName: string;
  setTaskName: (text: string) => void;
  taskDescription: string;
  setTaskDescription: (text: string) => void;
  taskIsFinished: boolean;
  setTaskIsFinished: (value: boolean) => void;
  selectedList: number;
  setSelectedList: (value: number) => void; // Updated here
  lists: { id: number; name: string }[];
  onDelete: () => void;
}) {
  return (
    <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <View style={styles.headerRow}>
            <Text style={styles.modalText}>Edit Task</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.cancelButtonText}>X</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Task Name"
            value={taskName}
            onChangeText={setTaskName}
          />
          <TextInput
            style={styles.input}
            placeholder="Task Description"
            value={taskDescription}
            onChangeText={setTaskDescription}
          />
          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => setTaskIsFinished(!taskIsFinished)}
          >
            <MaterialIcons
              name={taskIsFinished ? 'check-box' : 'check-box-outline-blank'} // Updated here
              size={24}
              color={taskIsFinished ? '#007AFF' : '#999'} // Updated here
            />
            <Text style={styles.checkboxLabel}>Is this task finished?</Text>
          </TouchableOpacity>
          <Picker
            selectedValue={selectedList} // Updated here
            onValueChange={(itemValue: number) => setSelectedList(itemValue)} // Updated here
            style={styles.input}
          >
            {lists.map((list) => (
              <Picker.Item key={list.id} label={list.name} value={list.id} /> // Updated here
            ))}
          </Picker>
          <Button title="Save Changes" onPress={onEditTask} />
          <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cancelButtonText: {
    color: 'grey',
    fontSize: 18,
  },
  deleteButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  deleteButtonText: {
    marginTop: 5,
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 8,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxLabel: {
    marginLeft: 8,
  },
});
