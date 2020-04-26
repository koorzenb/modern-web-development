# Javascript (Project 7)

## Introduction

This is a basic javascript project built for training purposes.

## Overview
This exercise aims to display skills at javascript classes, es6, object oriented programming, inheritance, seperation of concern.

It contains 2 classes: People and Person. People is a model and has all common properties i.e firstName, lastName and age. Person extends People with the functionality common to all Person instances e.g start walking, stop walking.

The ViewModel handles and validates user input.

A GUI is rendered. It requires the user to fill in values for firstName, lastName and age. Once this input is valid, the Create button gets enabled. When clicking create, a new Person instance is initialised and the form inputs and create button is disabled. The start and stop walking buttons are enabled. Upon clicking one of these buttons, the relative action will be called on the Person instance. The status wrapper will then display the person's walking status.
