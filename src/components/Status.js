import React, { Component } from 'react'
import styled from 'styled-components'
import Colors from './../constants/Colors'
import AuthRequired from './AuthRequired'

const Status = () => (
    <AuthRequired>
        <Property>
            <Row>
                <Light active/>
                <h6>Biuro otwarte</h6>
            </Row>
        </Property>
        <Property>
            <Row spaceBottom>
                <Light active/>
                <h6>Duży garaż</h6>
            </Row>
            <Row spaceBottom>
                <Light/>
                <h6>Mały garaż</h6>
            </Row>
            <Row spaceBottom>
                <Light/>
                <h6>Przed dużym garażem</h6>
            </Row>
            <Row>
                <Light active/>
                <h6>Przed małym garażem</h6>
            </Row>
        </Property>
        <Property>
            <Row>
                <Light active/>
                <h6>Klucz ma:</h6>
                <Person>tuhaj</Person>
            </Row>
        </Property>
    </AuthRequired>
)

export default Status

const Property = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 30px 0;
  filter: grayscale(${props => props.disabled ? 100 : 0}%);
  opacity: ${props => props.disabled ? 0.2 : 1};
`

const Row = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: ${props => props.spaceBottom ? 15 : 0}px;
`

const Light = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.active ? Colors.GreenLight : Colors.Red};
  margin-right: 20px;
`

const Person = styled.p`
  margin-left: 10px;
`
