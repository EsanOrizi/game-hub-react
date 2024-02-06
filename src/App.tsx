import {Box, Flex, Grid, GridItem, HStack, Show} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import {useState} from "react";
import {Genre} from "./hooks/useGenres";
import PlatfromSelector from "./components/PlatfromSelector";
import {Game, Platform} from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    sortOrder: string;
}

function App() {

    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);


    return <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
    }}
                 templateColumns={{
                     base: "1fr",
                     lg: "200px 1fr",

                 }}
    >
        <GridItem area='nav'><NavBar></NavBar></GridItem>
        <Show above="lg">
        <GridItem area='aside' >
            <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery,genre})}/>
        </GridItem>
        </Show>
        <GridItem area='main' paddingX={5} >
          <Flex paddingLeft={2} marginBottom={5}>
              <Box marginRight={5}>
            <PlatfromSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}></PlatfromSelector>
              </Box>
          <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}></SortSelector>
          </Flex>
            <GameGrid gameQuery={gameQuery}></GameGrid>
        </GridItem>

    </Grid>
}

export default App
