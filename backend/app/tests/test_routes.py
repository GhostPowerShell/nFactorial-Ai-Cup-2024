import unittest
from fastapi.testclient import TestClient
from app import create_app

class RoutesTestCase(unittest.TestCase):
    def setUp(self):
        self.app = create_app()
        self.client = TestClient(self.app)

    def test_analyze_route(self):
        response = self.client.post('/analyze', json={'code': 'print("Hello, World!")'})
        self.assertEqual(response.status_code, 200)

    def test_patch_route(self):
        response = self.client.post('/patch', json={'code': 'print("Hello, World!")'})
        self.assertEqual(response.status_code, 200)

if __name__ == '__main__':
    unittest.main()
