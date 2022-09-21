import { createAction } from '@reduxjs/toolkit';

export const changeFilter = createAction('contacts-slice/changeFilter');
export const addContact = createAction('contacts-slice/addContact');
export const deleteContact = createAction('contacts-slice/deleteContact');
