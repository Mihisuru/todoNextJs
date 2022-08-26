import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {
  Button,
  Flex,
  ListenItem,
  UnorderedList,
  Text,
  Input,
  ListItem,
} from "@chakra-ui/react";
import { useState } from 'react';



export default function Home() {
  const [tasks, setTasks] = useState(["to Do List"]);
  const [Item , setItem] = useState("");

  function removeItem (taskName){
    setTasks(tasks.filter((task) => {
        return task != taskName;
      }))
    }

    
  
  
    function AddItem() {
      if (Item != "" && !tasks.includes(Item)) {
        let temp = tasks;
        temp.push(Item);
        setTasks(temp);
        setItem("");
      }
    }

  
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="100"
      flexDirection="column"
      >
      <UnorderedList>
        {tasks.map((task) => {
          return (
            <ListItem key={task.index}>
              {task}
              <Button
                ml={10}
                onClick={() => {
                  removeItem(task);
                }}
                >
                  Remove Item
                </Button>
            </ListItem>
          );
        })}
      </UnorderedList>
      <input
          placeholder="Item Name"
          value={Item}
          onChange = {(e) => {
            setItem(e.target.value);
          }}
         ></input>
         <button  
          ml={10}
          onClick={AddItem}> Add Task  </button>
      </Flex>
  );
}
