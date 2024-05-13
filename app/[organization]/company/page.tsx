'use client';

import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import useOrganizationValidate from '../../hooks/useOrganizationValidate';
// Page for validating organization

interface Organization {
  organization: string;
}

const OrganizationNotFound = ({ params }: { params: Organization }) => {
  const { organization } = useOrganizationValidate(params, { islanding: false });

  useEffect(() => {
    organization();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            fontWeight: 'bold',
          }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quia provident voluptates porro
          perferendis, voluptatibus ea illo sint dolores commodi molestias assumenda quas totam beatae minus hic. Qui,
          nulla repellat odio deleniti a sequi ut aspernatur harum placeat totam dolor molestiae cum expedita maxime eos
          fuga est recusandae id, reprehenderit vitae cumque facere ratione. Dignissimos non voluptatum at voluptatibus
          nobis a fuga, commodi doloribus corporis cupiditate. Molestiae inventore dolores ullam cupiditate, eaque odit
          voluptas nobis iure error rerum sit totam, id repudiandae quibusdam ipsum aliquid dolorum vel ex quaerat nulla
          facere! Provident ad delectus suscipit repellendus magnam! Fugiat nesciunt magni ullam quia. Qui officia quod
          nihil laborum reiciendis eum facilis error aspernatur vel! Aspernatur asperiores cumque rem, quis velit beatae
          inventore dolorum facere sit vitae amet explicabo provident? At animi quam voluptas temporibus? Ducimus ea
          nobis mollitia! Neque commodi illum quaerat repellat ex, nam ab voluptates numquam. Vitae unde culpa
          blanditiis molestiae aut a ex autem recusandae, placeat deserunt alias in repellat minus nostrum illo fugit,
          rem sint eos nihil? Id optio ut sit quidem necessitatibus nisi maxime modi, voluptatem ducimus repudiandae
          quia laborum fuga laudantium aperiam perspiciatis inventore incidunt ipsam doloribus aspernatur temporibus
          dolore commodi atque dolores? Exercitationem repellendus nulla nemo? Autem amet inventore enim eligendi iste,
          at incidunt atque velit fuga odit consequuntur perspiciatis porro laboriosam impedit fugit. Sequi ut, atque ex
          reiciendis accusamus dolor officia cum dolorem odit dolores animi culpa delectus quasi obcaecati possimus
          voluptate qui, explicabo dignissimos, ratione et! Iusto quidem voluptatem, tempore adipisci optio rem eius
          obcaecati, explicabo corrupti ad aliquam culpa quaerat accusantium maiores omnis ipsam. Aspernatur neque atque
          molestias? Itaque aliquid vel facilis aspernatur quis doloremque dolorem sint perferendis. Porro, dicta, neque
          consequatur obcaecati laudantium odio ipsam vero accusamus voluptatum, non quos! Ipsum quaerat adipisci
          architecto vitae non fugit laudantium minus facilis sed, perferendis voluptates, at magnam corporis
          consectetur repudiandae fuga neque incidunt ipsam quasi sapiente nostrum amet. Voluptas eligendi perspiciatis,
          a porro quo ratione veritatis ut hic similique vero et magni veniam sunt, velit fugit cum optio consequatur?
          Tempore nesciunt accusantium hic, animi aliquam asperiores fugiat magni maiores fuga facere exercitationem
          saepe facilis molestias officia. Illo perferendis facilis, possimus molestiae obcaecati veniam praesentium
          facere amet, quis provident eius blanditiis odio fugiat nam magni odit ipsum exercitationem, magnam corrupti.
          Veritatis sit minima id placeat amet? Nulla fugit nobis provident distinctio iste ipsum ab molestias, pariatur
          quisquam cum nemo! Ducimus nobis dolor alias minima tempore deserunt, iusto sit neque! Officia minus inventore
          nostrum suscipit, quos magnam nemo sequi animi rerum cupiditate quam cumque deserunt quisquam molestiae
          perferendis corporis ipsa deleniti nobis nihil aliquam minima eius. Labore iure hic sint fuga, temporibus
          tempore inventore voluptatem possimus aut aspernatur cum nemo eius reiciendis harum debitis exercitationem
          minima illo ea itaque atque? Provident, perferendis ratione ad mollitia reiciendis similique porro,
          accusantium, tenetur voluptas repudiandae laudantium assumenda iure magnam. Veritatis, officiis quidem harum
          doloremque facilis id aut nam exercitationem et eveniet ducimus iusto mollitia quod pariatur reprehenderit,
          vero perferendis, quas inventore eos vel atque. Nemo delectus aliquid eaque, iusto dolorum iure cumque quasi
          modi ea dolores adipisci soluta explicabo vel ullam assumenda nihil sapiente, provident voluptatibus veritatis
          inventore, quis debitis ex eum officiis. Itaque, vitae. Quaerat eaque quidem repudiandae quis omnis maxime
          itaque sapiente dicta recusandae aut ab eveniet ea minus provident veritatis, qui similique ducimus nulla
          cupiditate vitae alias! Deserunt saepe id officiis dolore? Possimus, facere! Veniam ullam accusamus tempore
          impedit voluptates quidem deserunt aut consectetur totam, ipsum voluptas. Commodi ipsum, maiores aspernatur
          veritatis quae necessitatibus architecto quas delectus asperiores quaerat beatae ipsam eius repellat totam
          vitae debitis nostrum fugiat quod magni minus ut hic iure! Voluptas facilis ducimus doloremque modi aperiam
          accusamus quidem, saepe explicabo fugiat reiciendis quam tempore veniam fugit inventore dolor repudiandae. Ut
          culpa ipsum nesciunt impedit, modi ipsam? Molestias consectetur ratione, voluptatum libero, voluptates nobis
          maxime dolor sunt facere repellendus repudiandae doloremque maiores optio. Maiores omnis id perferendis, ex
          voluptatem, aliquam temporibus porro quas nobis, tempore doloribus in quae reiciendis voluptate sunt ad! Nihil
          dicta dolor praesentium ipsam minima iusto cupiditate provident corporis sint itaque laboriosam, consequuntur
          ea non quos autem ipsa illo voluptatem commodi quibusdam iste? Nemo dolor non aliquid libero quibusdam magni
          explicabo provident possimus repellat quia sit distinctio, dolore ratione placeat animi fugiat debitis minus
          neque nisi necessitatibus. Quasi numquam repudiandae, in provident sunt autem nostrum cumque amet aperiam
          veritatis, sed, voluptate praesentium quibusdam corrupti assumenda. Eius quam neque facere adipisci ratione
          consequuntur obcaecati eum totam nobis repellendus eligendi dolor, suscipit perferendis fugit! Ipsa corporis
          rerum reprehenderit exercitationem doloremque, praesentium aperiam eveniet? Omnis minus earum eum, blanditiis
          itaque fugit temporibus cum voluptatem quisquam rerum ex. Consectetur minima voluptates ea rerum perferendis
          asperiores tempora dolorum exercitationem, temporibus, sequi similique excepturi ipsa eos quo accusamus nam
          sapiente hic iste voluptate aut. Eos, quam laboriosam necessitatibus minus blanditiis adipisci doloremque quia
          impedit. Blanditiis error officia tempore reiciendis, repellendus esse, ducimus quisquam distinctio illo
          nostrum doloremque, inventore nemo perspiciatis. Blanditiis ab iusto ipsam, repellat omnis explicabo itaque
          nam nisi maiores impedit ullam suscipit mollitia quibusdam magnam perspiciatis dolores amet rerum illum et
          eaque, neque officia magni? Veniam laborum impedit, vel illum culpa dolor atque ea repellendus reprehenderit
          assumenda! Placeat odit porro similique voluptatum atque omnis accusantium, ad architecto quasi pariatur
          excepturi fugiat eaque. Accusamus quis non mollitia. Facere animi dolorum saepe temporibus quibusdam. Pariatur
          quisquam sapiente dolor inventore consequatur ab explicabo magni. Quidem debitis reiciendis sapiente adipisci
          cumque sed? Aliquid doloribus omnis eligendi dolores dicta accusantium nihil sit molestias, numquam a,
          deleniti dolore quos ullam amet nisi rem. Veritatis nam dolore quos, deleniti ea corporis voluptatum quasi
          ratione fugit itaque in aliquid. Dolorem ipsa repellendus numquam eveniet sed dolorum soluta suscipit quis,
          molestias inventore architecto totam! Provident pariatur amet, distinctio sunt quidem aspernatur cupiditate
          ullam ab officiis consectetur reprehenderit architecto nulla voluptatibus numquam fuga nihil reiciendis
          nostrum labore. Magni, cupiditate laborum. Totam porro vero eos, voluptatum accusantium corporis quibusdam,
          officia suscipit reiciendis repudiandae nemo, itaque deserunt natus labore nulla deleniti eius? Cum ad
          assumenda ratione ut voluptatibus repudiandae facilis perspiciatis, sint mollitia? Sint?
        </Typography>
      </Box>
    </Box>
  );
};

export default OrganizationNotFound;
