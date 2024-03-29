import { Grid, GridItem, Show } from "@chakra-ui/react";

import NavBar from "./components/navbar";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav " " main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" >
        <NavBar/>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" >
          aside
        </GridItem>
      </Show>
      <GridItem area="main" >
        main
      </GridItem>
    </Grid>
  );
}
export default App;
