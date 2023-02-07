import "./App.css";
import WithSubnavigation from "./components/NavBar";
import CallToActionWithVideo from "./components/CTA";
import SmallWithLogoLeft from "./components/Footer";
import PersonCard from "./components/PersonCard";
import { Container, Heading, Spacer, Stack } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <body>
        <div className="content">
          <WithSubnavigation />
          <CallToActionWithVideo />
          <Container maxW={"5xl"}>
            <Heading>Meet the team...</Heading>
            <Stack
              align={"center"}
              spacing={{ base: 8, md: 10 }}
              py={{ base: 5, md: 7 }}
              direction={{ base: "column", md: "row" }}
            >
              <PersonCard />
              <Spacer />
              <PersonCard />
              <Spacer />
              <PersonCard />
            </Stack>
          </Container>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            dapibus, nulla et congue dignissim, elit turpis ullamcorper risus,
            quis accumsan ante dolor quis dui. Aenean dignissim volutpat tortor,
            sit amet rhoncus magna lacinia vel. Aliquam ullamcorper dolor eget
            vehicula convallis. Praesent rhoncus ipsum nec velit convallis, non
            cursus lorem luctus. Aliquam ornare nec diam quis scelerisque.
            Aliquam dui nisl, consequat sed nulla aliquam, molestie accumsan
            metus. In hac habitasse platea dictumst. Aliquam erat volutpat. Duis
            imperdiet enim ligula, eu lacinia metus mollis sollicitudin. Etiam
            aliquet tellus nulla. Sed tempus porttitor nisi in mattis.
            Suspendisse dignissim nisl id augue sagittis lobortis.
          </p>
          <br />
          <p>
            Ut at orci ac nisi commodo faucibus. Nam id quam mattis, semper
            mauris eget, egestas lacus. Maecenas sodales, diam ac sollicitudin
            dictum, lectus felis convallis felis, in sodales felis quam quis
            ligula. Nunc eu nulla pellentesque, egestas felis at, euismod felis.
            Duis id interdum magna. Aenean dapibus, ligula id aliquet fermentum,
            justo mi condimentum sem, eu finibus est odio vel neque. Cras
            feugiat, sapien eu pulvinar suscipit, tellus augue ornare metus,
            eget tempor velit nisl ut tortor. Suspendisse pretium eros convallis
            nibh venenatis feugiat. Quisque at nisl rhoncus, molestie nisi et,
            pretium metus. Sed id lobortis justo. Curabitur vestibulum facilisis
            diam at sollicitudin. Nunc commodo risus eu pretium pharetra. Donec
            id mollis orci. Quisque laoreet erat a augue gravida laoreet. Fusce
            vitae eros ac eros dignissim lobortis.
          </p>
          <br />
          <p>
            Phasellus vitae elementum risus. Nulla aliquet leo at sem mattis,
            quis mattis metus condimentum. Vestibulum vel placerat dolor.
            Suspendisse potenti. Quisque mi erat, lobortis nec condimentum vel,
            ullamcorper sit amet lacus. Aenean vel eleifend tortor. Ut lobortis
            nec nunc et viverra. Aenean est turpis, condimentum sed eros non,
            venenatis vehicula mauris. Duis vulputate facilisis nunc, fermentum
            interdum nunc scelerisque at. Nulla ut tempus tortor, ut interdum
            dolor. Aliquam leo leo, pharetra posuere pretium in, dapibus eu
            risus. Nam quis diam et nibh finibus accumsan. Proin vitae dignissim
            libero. Donec ut mauris tincidunt, sollicitudin ipsum a, mollis
            purus. Aenean sit amet molestie quam, quis malesuada enim. Aliquam
            eget lacus et nibh vehicula convallis sed ut nibh.
          </p>
          <br />
          <p>
            Pellentesque dictum consequat libero eu blandit. Maecenas in
            fringilla sem. Ut vel mollis turpis. Phasellus ultricies aliquam
            malesuada. Nunc in vehicula ligula, sed tempor quam. Mauris finibus
            ligula felis, id sagittis quam lacinia sit amet. Sed at eros id elit
            rhoncus pharetra.
          </p>
          <br />
          <p>
            Nam dui ex, condimentum sed molestie vitae, fringilla vel orci.
            Suspendisse purus sapien, bibendum sed commodo at, malesuada et
            nulla. Aliquam a porttitor mauris. Mauris imperdiet nisl sem, eget
            ultrices odio luctus et. Sed egestas interdum risus et aliquam.
            Praesent nunc arcu, feugiat elementum justo a, pharetra scelerisque
            orci. Vivamus tincidunt ante sit amet feugiat gravida. In vehicula,
            lorem a facilisis viverra, augue sem semper orci, eget ornare ipsum
            enim quis justo. Aenean vitae mauris finibus ante laoreet mattis in
            vel magna. Donec et sodales magna. Donec auctor ultricies lorem nec
            molestie. Aenean quis enim porttitor, dapibus nulla quis, luctus
            orci. Vivamus condimentum velit vitae purus scelerisque, aliquam
            posuere metus iaculis.
          </p>
        </div>
      </body>
      <div id="footer">
        <SmallWithLogoLeft />
      </div>
    </div>
  );
}

export default App;
