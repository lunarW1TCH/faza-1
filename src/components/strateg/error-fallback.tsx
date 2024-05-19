import cardRecipe from '~/styles/card';
import linkRecipe from '~/styles/link';

import VStack from '../containers/v-stack';

const ErrorFallback = () => {
  return (
    <VStack>
      <div class={`${cardRecipe.root} max-w-[400px]`}>
        <div class={cardRecipe.header}>
          <h1 class='text-xl font-semibold'>
            Pobieranie danych nie powiodło się
          </h1>
        </div>
        <div class={cardRecipe.body}>
          <p class='text-justify'>
            API{' '}
            <a href='https://strateg.stat.gov.pl/apidocs' class={linkRecipe}>
              strateg.stat.gov
            </a>{' '}
            posiada ograniczenie wykonywanych zapytań: do 10 żądań na sekundę
            oraz do 500 żądań na 15 minut. Jeżeli widzisz tę wiadomość spróbuj
            ponownie za kilkanaście minut. Przepraszam za opóźnienia!
          </p>
        </div>
      </div>
    </VStack>
  );
};

export default ErrorFallback;
