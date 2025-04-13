import React from 'react'

const Materiais = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">Materiais</h2>
                <p className="text-center text-lg text-gray-700 mb-6">
                    Acesse materiais de estudo compartilhados por outros estudantes e professores.
                </p>
                {/* Aqui você pode adicionar uma lista ou cards para os materiais */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-medium text-gray-800">PDF - Cálculo Diferencial</h3>
                        <a href="#" className="text-blue-500 hover:underline">Baixar PDF</a>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-medium text-gray-800">Apostila - Física</h3>
                        <a href="#" className="text-blue-500 hover:underline">Baixar Apostila</a>
                    </div>
                    {/* Adicione mais materiais conforme necessário */}
                </div>
            </div>
        </section>
    )
}

export default Materiais
