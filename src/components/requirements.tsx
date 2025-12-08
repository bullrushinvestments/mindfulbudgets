import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

interface Requirement {
  id: number;
  name: string;
  description: string;
  isCompleted: boolean;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [newRequirementName, setNewRequirementName] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRequirements();
  }, []);

  const fetchRequirements = async () => {
    try {
      setLoading(true);
      const response = await axios.get<Requirement[]>('https://api.example.com/requirements');
      setRequirements(response.data);
    } catch (error) {
      toast.error('Failed to load requirements.');
    } finally {
      setLoading(false);
    }
  };

  const addNewRequirement = async () => {
    if (!newRequirementName.trim()) return;

    try {
      setLoading(true);
      await axios.post<Requirement>('https://api.example.com/requirements', { name: newRequirementName });
      setRequirements([...requirements, { id: requirements.length + 1, name: newRequirementName, description: '', isCompleted: false }]);
      setNewRequirementName('');
      toast.success('Requirement added successfully.');
    } catch (error) {
      toast.error('Failed to add requirement.');
    } finally {
      setLoading(false);
    }
  };

  const toggleCompletion = async (id: number) => {
    try {
      await axios.put(`https://api.example.com/requirements/${id}`, { isCompleted: !requirements.find(req => req.id === id)?.isCompleted });
      setRequirements(prevState =>
        prevState.map(req =>
          req.id === id ? { ...req, isCompleted: !req.isCompleted } : req
        )
      );
    } catch (error) {
      toast.error('Failed to update requirement status.');
    }
  };

  const handleRequirementChange = async (id: number, updatedDescription: string) => {
    try {
      await axios.put(`https://api.example.com/requirements/${id}`, { description: updatedDescription });
      setRequirements(prevState =>
        prevState.map(req =>
          req.id === id ? { ...req, description: updatedDescription } : req
        )
      );
    } catch (error) {
      toast.error('Failed to update requirement description.');
    }
  };

  const navigateToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:space-y-4">
      <h1 className="text-xl font-bold">Gather Requirements</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="flex items-center mb-4">
            <input
              type="text"
              value={newRequirementName}
              onChange={(e) => setNewRequirementName(e.target.value)}
              placeholder="Add a new requirement..."
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              aria-label="Add a new requirement"
            />
            <button
              onClick={addNewRequirement}
              disabled={!newRequirementName.trim()}
              className={`ml-2 p-2 text-white bg-blue-500 rounded-md ${!newRequirementName.trim() ? 'opacity-50 cursor-not-allowed' : ''}`}
              aria-label="Add requirement"
            >
              Add
            </button>
          </div>

          {requirements.map((requirement) => (
            <div key={requirement.id} className="flex items-center justify-between">
              <input
                type="checkbox"
                checked={requirement.isCompleted}
                onChange={() => toggleCompletion(requirement.id)}
                aria-label={`Toggle completion for requirement ${requirement.name}`}
              />
              <span
                style={{ textDecoration: requirement.isCompleted ? 'line-through' : 'none' }}
                className={`mr-2 cursor-pointer`}
                onClick={() => navigateToDashboard()}
                onKeyDown={(e) => e.key === 'Enter' && navigateToDashboard()}
                role="button"
                tabIndex={0}
              >
                {requirement.name}
              </span>
              <input
                type="text"
                value={requirement.description || ''}
                onChange={(e) => handleRequirementChange(requirement.id, e.target.value)}
                placeholder={`Describe ${requirement.name}`}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default GatherRequirements;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

interface Requirement {
  id: number;
  name: string;
  description: string;
  isCompleted: boolean;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [newRequirementName, setNewRequirementName] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRequirements();
  }, []);

  const fetchRequirements = async () => {
    try {
      setLoading(true);
      const response = await axios.get<Requirement[]>('https://api.example.com/requirements');
      setRequirements(response.data);
    } catch (error) {
      toast.error('Failed to load requirements.');
    } finally {
      setLoading(false);
    }
  };

  const addNewRequirement = async () => {
    if (!newRequirementName.trim()) return;

    try {
      setLoading(true);
      await axios.post<Requirement>('https://api.example.com/requirements', { name: newRequirementName });
      setRequirements([...requirements, { id: requirements.length + 1, name: newRequirementName, description: '', isCompleted: false }]);
      setNewRequirementName('');
      toast.success('Requirement added successfully.');
    } catch (error) {
      toast.error('Failed to add requirement.');
    } finally {
      setLoading(false);
    }
  };

  const toggleCompletion = async (id: number) => {
    try {
      await axios.put(`https://api.example.com/requirements/${id}`, { isCompleted: !requirements.find(req => req.id === id)?.isCompleted });
      setRequirements(prevState =>
        prevState.map(req =>
          req.id === id ? { ...req, isCompleted: !req.isCompleted } : req
        )
      );
    } catch (error) {
      toast.error('Failed to update requirement status.');
    }
  };

  const handleRequirementChange = async (id: number, updatedDescription: string) => {
    try {
      await axios.put(`https://api.example.com/requirements/${id}`, { description: updatedDescription });
      setRequirements(prevState =>
        prevState.map(req =>
          req.id === id ? { ...req, description: updatedDescription } : req
        )
      );
    } catch (error) {
      toast.error('Failed to update requirement description.');
    }
  };

  const navigateToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:space-y-4">
      <h1 className="text-xl font-bold">Gather Requirements</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="flex items-center mb-4">
            <input
              type="text"
              value={newRequirementName}
              onChange={(e) => setNewRequirementName(e.target.value)}
              placeholder="Add a new requirement..."
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              aria-label="Add a new requirement"
            />
            <button
              onClick={addNewRequirement}
              disabled={!newRequirementName.trim()}
              className={`ml-2 p-2 text-white bg-blue-500 rounded-md ${!newRequirementName.trim() ? 'opacity-50 cursor-not-allowed' : ''}`}
              aria-label="Add requirement"
            >
              Add
            </button>
          </div>

          {requirements.map((requirement) => (
            <div key={requirement.id} className="flex items-center justify-between">
              <input
                type="checkbox"
                checked={requirement.isCompleted}
                onChange={() => toggleCompletion(requirement.id)}
                aria-label={`Toggle completion for requirement ${requirement.name}`}
              />
              <span
                style={{ textDecoration: requirement.isCompleted ? 'line-through' : 'none' }}
                className={`mr-2 cursor-pointer`}
                onClick={() => navigateToDashboard()}
                onKeyDown={(e) => e.key === 'Enter' && navigateToDashboard()}
                role="button"
                tabIndex={0}
              >
                {requirement.name}
              </span>
              <input
                type="text"
                value={requirement.description || ''}
                onChange={(e) => handleRequirementChange(requirement.id, e.target.value)}
                placeholder={`Describe ${requirement.name}`}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default GatherRequirements;