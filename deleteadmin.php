<?php
// Allow from any origin
header("Access-Control-Allow-Origin: *");
// Allow the following methods
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
// Allow the following headers
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// If it's an OPTIONS request, return with a 200 status
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Set the Content-Type to application/json
header('Content-Type: application/json');

// Set up a response array for errors or success
$response = [
    'status' => 'error',
    'message' => 'An error occurred.'
];

try {
    // Get the raw POST data (JSON) from the request body
    $inputData = file_get_contents('php://input');
    $data = json_decode($inputData, true);

    // Check if admin_id is provided in the JSON payload
    if (!isset($data['admin_id']) || empty($data['admin_id'])) {
        throw new Exception('Missing or invalid admin_id.');
    }

    // Sanitize admin_id (make sure it's an integer)
    $admin_id = (int) $data['admin_id'];

    // Set up PDO connection to MySQL (replace with your DB credentials)
    $dsn = 'mysql:host=127.0.0.1;dbname=luafsesg_mediveda_db;charset=utf8';
    $username = 'luafsesg_Vivek';
    $password = 'Vivek@98';

    // Create a PDO instance
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Prepare the DELETE SQL statement to remove the admin
    $sql = "DELETE FROM Admin WHERE Sno = :admin_id";

    // Prepare the statement
    $stmt = $pdo->prepare($sql);

    // Bind the admin_id parameter
    $stmt->bindParam(':admin_id', $admin_id, PDO::PARAM_INT);

    // Execute the query
    $stmt->execute();

    // Check if any rows were affected (i.e., an admin was deleted)
    if ($stmt->rowCount() > 0) {
        // Success
        $response['status'] = 'success';
        $response['message'] = 'Admin deleted successfully.';
    } else {
        // If no rows were affected, no admin was found with that id
        $response['status'] = 'error';
        $response['message'] = 'Admin not found or already deleted.';
    }
} catch (Exception $e) {
    // Handle any errors and set the error message
    $response['message'] = $e->getMessage();
} catch (PDOException $pdoEx) {
    // Handle PDO errors (e.g., database connection errors)
    $response['message'] = 'Database error: ' . $pdoEx->getMessage();
}

// Return the JSON response
echo json_encode($response);
?>
