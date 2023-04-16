import fastify from "fastify";
import mongoose from "mongoose";

const server = fastify();
mongoose.connect(`${MONGO_URI}`, {});

server.get("/ping", async (request, reply) => {
  return "pong\n";
});

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});

//winston
// us parser js

// // Définition du schéma pour les informations de la requête
// const requestSchema = new mongoose.Schema({
//   browser: String,
//   version: String,
//   language: String,
//   ip: String,
//   location: String,
//   uuid: String
// });

// // Création du modèle pour les informations de la requête
// const Request = mongoose.model('Request', requestSchema);

// // Middleware pour récupérer les informations de la requête
// fastify.register(useragent);
// fastify.register(requestIp);

// fastify.addHook('onRequest', (request, reply, done) => {
//   const ua = request.useragent;
//   const ip = request.clientIp;
//   const location = ''; // À compléter avec le code pour déduire la localisation à partir de l'adresse IP
//   const uuid = request.headers['uuid'] || uuid.v4(); // Utilisation d'un token UUID généré aléatoirement si pas présent dans les headers

//   const requestLog = new Request({
//     browser: ua.browser,
//     version: ua.version,
//     language: request.headers['accept-language'],
//     ip: ip,
//     location: location,
//     uuid: uuid
//   });

//   // Enregistrement des informations de la requête dans la base MongoDB
//   requestLog.save((err) => {
//     if (err) {
//       console.error('Erreur lors de l\'enregistrement de la requête :', err);
//     }
//   });

//   done();
// });
