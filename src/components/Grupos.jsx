import React from 'react'

const Grupos = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">Grupos</h2>
                <p className="text-center text-lg text-gray-700 mb-6">
                    Participe de grupos colaborativos para discutir e compartilhar ideias com seus colegas.
                </p>
                {/* Aqui você pode adicionar uma lista ou cards para os grupos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-medium text-gray-800">Grupo de Matemática</h3>
                        <p className="text-gray-600 mt-2">Discussões sobre problemas e soluções matemáticas.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-medium text-gray-800">Grupo de História</h3>
                        <p className="text-gray-600 mt-2">Compartilhamento de materiais e debates históricos.</p>
                    </div>
                    {/* Adicione mais grupos conforme necessário */}
                </div>
            </div>
        </section>
    )
}

export default Grupos
