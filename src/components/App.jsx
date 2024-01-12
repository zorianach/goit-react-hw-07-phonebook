import AddContactForm from "./Forms/AddContactForm";
import Section from "./Section/Section";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import Layout from "./Layout/Layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllContactsThunk } from "../redux/contactsSlice/thunks";
import { selectIsLoading } from "../redux/selectors";
import Loader from "./Loader/Loader";

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading)


  useEffect(() => {
    dispatch(fetchAllContactsThunk());
  }, [dispatch]);
 
  return (
    <>
    <Layout>
      <Section title="Phonebook">
        <AddContactForm />
      </Section>
      <Section title="Contacts">
        <Filter/>
        <ContactList />
        {isLoading && <Loader/>}
      </Section>
    </Layout>
    </>
  );
};

// export default {App};
