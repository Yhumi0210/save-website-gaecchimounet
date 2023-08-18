<?php
// Vérifiez que le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {

  // Récupérez les données du formulaire
  $nom = test_input($_POST["nom"]);
  $email = test_input($_POST["email"]);
  $message = test_input($_POST["message"]);

  // Vérifiez que les champs ne sont pas vides
  if (empty($nom) || empty($email) || empty($message)) {
    echo "Tous les champs sont obligatoires.";
    exit();
  }

  // Vérifiez que l'adresse e-mail est valide
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "L'adresse e-mail n'est pas valide.";
    exit();
  }

  // En-têtes de l'e-mail
  $to = "gaecchimounet@gmail.com";
  $subject = "Nouveau message du formulaire de contact du site Web Gaec Chimounet";
  $headers = "From: $nom <$email>" . "\r\n" .
             "Reply-To: $email" . "\r\n" .
             "X-Mailer: PHP/" . phpversion();

  // Contenu de l'e-mail
  $message = "Nom: $nom\n" .
             "Email: $email\n\n" .
             "Message:\n$message";

  // Envoyer l'e-mail
  if (mail($to, $subject, $message, $headers)) {
    echo "Votre message a été envoyé avec succès.";
  } else {
    echo "Une erreur est survenue lors de l'envoi de votre message.";
  }

}

// Fonction pour nettoyer les données du formulaire
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>
