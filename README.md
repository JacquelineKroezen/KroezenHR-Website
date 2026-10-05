# Kroezen HR – website

Website van Kroezen HR (www.kroezenhr.nl).

## Teksten aanpassen
Ga naar [app.pagescms.org](https://app.pagescms.org), log in met GitHub en open
**Teksten website**. Na **Save** staat de wijziging binnen ongeveer een minuut online.

- Lege regel in een tekstvak = nieuwe alinea
- Enter in een kop = nieuwe regel

## Techniek
- Teksten: `src/_data/site.yml`
- Opmaak: `src/index.njk` en `src/styles.css`
- Gebouwd met Eleventy, gehost op Netlify (`netlify.toml`)
- Lokaal bekijken: `npm install` en daarna `npm start`
