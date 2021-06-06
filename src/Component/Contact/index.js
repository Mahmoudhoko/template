import React from 'react'
import "./style.js"
import {ContactSection, Form, InputDiv, Span, Title, Text, Email, InputSubject, TextArea, Submit } from './style.js';

const Contact =()=>{
  return(
    <ContactSection>
      <div class="container">
        <Title><Span>Drop </Span>Me A line</Title>
        <Form>
            <InputDiv>
                <Text placeholder="Your Name"/>
                <Email type="email" placeholder="Your Email"/>
            </InputDiv>
            <InputSubject type="text" placeholder="Your Subject"/>
            <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
            <Submit type="submit" value="Send Message"/>
        </Form>
      </div>
    </ContactSection>
  )
}

export default Contact;